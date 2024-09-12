import Ephemeris from '../Ephemeris.js'
import { util } from '../utilities/util.js'

const averageRetrogradeTable = (bodyKey) => {
  // use a conservative number for the average length of the retrograde period
  // some guidance http://www.angelfire.com/planet/astrology6/
  switch(bodyKey) {
    case 'mercury':
      return 15
    case 'venus':
      return 30
    case 'mars':
      return 60
    case 'jupiter':
      return 100
    case 'saturn':
      return 120
    case 'uranus':
      return 140
    case 'neptune':
      return 140
    case 'pluto':
      return 160
    case 'chiron':
      return 120
    default:
      return 100
  }
}

export const motionEventObject = ({utcDate, apparentLongitude, nextMovementAmount, interval}={}) => {
  return ({
    date: utcDate,
    apparentLongitude,
    nextMovementAmount,
    interval
  })
}

export const getDirectedDate = ({direction = 'next', unit = 'date', amount=0, utcDate}={}) => {
  // Given a date object, returns next [date or minute] or prev [date or minute] in new date object
  if (!['next', 'prev'].includes(direction)) throw new Error(`Please pass in direction from the following: 'next' or 'prev'. Not "${direction}".`)
  if (!['date', 'hour', 'minute', 'second'].includes(unit)) throw new Error(`Please pass in unit from the following: 'date', 'hour', 'minute', or 'second'. Not "${unit}".`)
  if (!amount) throw new Error('Please enter an amount')

  const newDate = util.cloneUTCDate(utcDate)
  const directionIncrement = direction === 'next' ? amount : -1 * amount

  if (unit === 'date') {
    newDate.setUTCDate(utcDate.getUTCDate() + directionIncrement)
  } else if (unit === 'hour') {
    newDate.setUTCHours(utcDate.getUTCHours() + directionIncrement)
  } else if (unit === 'minute') {
    newDate.setUTCMinutes(utcDate.getUTCMinutes() + directionIncrement)
  } else if (unit === 'second') {
    newDate.setUTCSeconds(utcDate.getUTCSeconds() + directionIncrement)
  }

  return newDate
}

const getCurrentMovementAmount = (bodyKey, utcDate, currentApparentLongitude) => {
  if (!bodyKey) throw new Error('Please provide a celestial body key. Ex: "mercury".')
  if (!currentApparentLongitude) {
    currentApparentLongitude = getApparentLongitude(bodyKey, utcDate)
  }

  return getApparentLongitudeDifference(currentApparentLongitude, getApparentLongitude(bodyKey, getDirectedDate({amount: 1, direction: "next", unit: "second", utcDate})))
}

const getMotion = (bodyKey, utcDate) => {
  const ephemeris = new Ephemeris(
    {
      year:utcDate.getUTCFullYear(),
      month: utcDate.getUTCMonth(),
      day: utcDate.getUTCDate(),
      hours: utcDate.getUTCHours(),
      minutes: utcDate.getUTCMinutes(),
      seconds: utcDate.getUTCSeconds(),
      key: bodyKey,
      calculateMotion: true,
      calculateShadows: false,
      calcHelioCentricLongitudesOnly: true,
    })

    return {
      currentApparentLongitude: ephemeris[bodyKey].position.apparentLongitude,
      currentMovementAmount: ephemeris[bodyKey].motion.oneSecondMotionAmount
    }
}

const isRetrograde = movementAmount => {
  return movementAmount <= 0 // Yes, some planets do land on 0. for example: Saturn on 2020-05-11T04:10:02.000Z
}

const isDirect = movementAmount => {
  return movementAmount > 0
}

export const getApparentLongitude = (bodyKey, utcDate) => {
  if (!bodyKey) throw new Error('Please provide a celestial body key. Ex: "mercury".')
  // Lat / lng / height does not matter in determining apparent longitude of celestial body as long as UTC datetime is passed in.
  return new Ephemeris(
    {
      year:utcDate.getUTCFullYear(),
      month: utcDate.getUTCMonth(),
      day: utcDate.getUTCDate(),
      hours: utcDate.getUTCHours(),
      minutes: utcDate.getUTCMinutes(),
      seconds: utcDate.getUTCSeconds(),
      key: bodyKey,
      calculateMotion: false,
      calculateShadows: false,
      calcHelioCentricLongitudesOnly: true
    }
  )[bodyKey].position.apparentLongitude
}

export const getApparentLongitudeDifference = (currentApparentLongitude, nextApparentLongitude) => {

  const nextMovementAmount = util.getModuloDifference(nextApparentLongitude, currentApparentLongitude, 360)

  return util.correctRealModuloNumber(nextMovementAmount, nextApparentLongitude, currentApparentLongitude, 360)
}

const resetEventSearch = (intervalAmount, currentDate, currentApparentLongitude, currentMovementAmount) => {
  return {
    intervalAmount: Math.max(Math.floor(intervalAmount / 2), 0)
,
    currentDate: util.cloneUTCDate(currentDate),
    currentApparentLongitude,
    currentMovementAmount
  }
}

export const calculateNextRetrogradeStation = ({direction='next', bodyKey, utcDate, currentApparentLongitude=null, currentMovementAmount=null}={}) => {
  if (!['next', 'prev'].includes(direction)) throw new Error(`Please pass in direction from the following: 'next' or 'prev'. Not "${direction}".`)

  if (!currentApparentLongitude) {
    currentApparentLongitude = getApparentLongitude(bodyKey, utcDate)
  }

  let currentDate = util.cloneUTCDate(utcDate)

  if (currentMovementAmount !== 0 && !currentMovementAmount) {
    currentMovementAmount = getCurrentMovementAmount(bodyKey, utcDate, currentApparentLongitude)
  }

  if (isRetrograde(currentMovementAmount)) {
    if (direction === 'next') {
      // Skip to end of current retrograde
      // and find the next retrograde moment from there
      const nextDirectMoment = calculateNextDirectMoment({direction: 'next', bodyKey, utcDate: currentDate, currentApparentLongitude, currentMovementAmount})

      return calculateNextRetrogradeMoment({direction: 'next', bodyKey, utcDate: nextDirectMoment.date, currentApparentLongitude: nextDirectMoment.apparentLongitude, currentMovementAmount: nextDirectMoment.nextMovementAmount})

    } else if (direction === 'prev') {
      // Skip backwards through entire retrograde to find next direct moment
      const prevDirectMoment = calculateNextDirectMoment({direction: 'prev', bodyKey, utcDate: currentDate, currentApparentLongitude, currentMovementAmount})

      // add 1 second
      const nextDate = getDirectedDate({direction:'next', amount: 1, unit: 'second', utcDate: prevDirectMoment.date});

      ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, nextDate));

      return motionEventObject({utcDate: nextDate, apparentLongitude: currentApparentLongitude, nextMovementAmount: currentMovementAmount, interval: 'second'})
    }
  } else {
    if (direction === 'next') {
      // If we're direct, just find the next retrograde moment
      return calculateNextRetrogradeMoment({direction: 'next', bodyKey, utcDate, currentApparentLongitude, currentMovementAmount})
    } else if (direction === 'prev') {
      // Find prev retrograde moment
      const prevRetroMoment = calculateNextRetrogradeMoment({direction: 'prev', bodyKey, utcDate: currentDate, currentApparentLongitude, currentMovementAmount})

      // Skip backwards through entire retrograde cycle to find next direct moment
      const prevDirectMoment = calculateNextDirectMoment({direction: 'prev', bodyKey, utcDate: prevRetroMoment.date, currentApparentLongitude: prevRetroMoment.apparentLongitude, currentMovementAmount: prevRetroMoment.nextMovementAmount})

      // add 1 second
      const nextDate = getDirectedDate({direction:'next', amount: 1, unit: 'second', utcDate: prevDirectMoment.date});

      ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, nextDate));

      return motionEventObject({utcDate: nextDate, apparentLongitude: currentApparentLongitude, nextMovementAmount: currentMovementAmount, interval: 'second'})
    }
  }
}

export const calculateNextDirectStation = ({direction='next', bodyKey, utcDate, currentApparentLongitude=null, currentMovementAmount=null}={}) => {
  if (!['next', 'prev'].includes(direction)) throw new Error(`Please pass in direction from the following: 'next' or 'prev'. Not "${direction}".`)


  if (!currentApparentLongitude) {
    currentApparentLongitude = getApparentLongitude(bodyKey, utcDate)
  }

  let currentDate = util.cloneUTCDate(utcDate)

  if (currentMovementAmount !== 0 && !currentMovementAmount) {
    currentMovementAmount = getCurrentMovementAmount(bodyKey, utcDate, currentApparentLongitude)
  }

  if (isDirect(currentMovementAmount)) {
    if (direction === 'next') {
      // Skip to end of current direct phase
      // and find the next direct moment from there
      const nextRetrogradeMoment = calculateNextRetrogradeMoment({direction: 'next', bodyKey, utcDate: currentDate, currentApparentLongitude, currentMovementAmount})

      return calculateNextDirectMoment({direction: 'next', bodyKey, utcDate: nextRetrogradeMoment.date, currentApparentLongitude: nextRetrogradeMoment.apparentLongitude, currentMovementAmount: nextRetrogradeMoment.nextMovementAmount})

    } else if (direction === 'prev') {
      // Skip backwards through entire direct
      const prevDirectMoment = calculateNextRetrogradeMoment({direction: 'prev', bodyKey, utcDate: currentDate, currentApparentLongitude, currentMovementAmount})

      // add 1 second
      const nextDate = getDirectedDate({direction:'next', amount: 1, unit: 'second', utcDate: prevDirectMoment.date});

      ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, nextDate));

      return motionEventObject({utcDate: nextDate, apparentLongitude: currentApparentLongitude, nextMovementAmount: currentMovementAmount, interval: 'second'})
    }
  } else {
    if (direction === 'next') {
      return calculateNextDirectMoment({direction: 'next', bodyKey, utcDate, currentApparentLongitude, currentMovementAmount})
    } else if (direction === 'prev') {
      // Find prev direct moment
      const prevRetroMoment = calculateNextDirectMoment({direction: 'prev', bodyKey, utcDate: currentDate, currentApparentLongitude, currentMovementAmount})

      // Skip backwards through entire direct to find next retrograde moment
      const prevDirectMoment = calculateNextRetrogradeMoment({direction: 'prev', bodyKey, utcDate: prevRetroMoment.date, currentApparentLongitude: prevRetroMoment.apparentLongitude, currentMovementAmount: prevRetroMoment.nextMovementAmount})

      // add 1 second
      const nextDate = getDirectedDate({direction:'next', amount: 1, unit: 'second', utcDate: prevDirectMoment.date});

      ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, nextDate));

      return motionEventObject({utcDate: nextDate, apparentLongitude: currentApparentLongitude, nextMovementAmount: currentMovementAmount, interval: 'second'})
    }
  }
}

export const calculateNextRetrogradeMoment = ({bodyKey, utcDate, currentApparentLongitude=null, direction='next', currentMovementAmount=null}={}) => {
  if (!['next', 'prev'].includes(direction)) throw new Error(`Please pass in direction from the following: 'next' or 'prev'. Not "${direction}".`)

  if (!currentApparentLongitude) {
    currentApparentLongitude = getApparentLongitude(bodyKey, utcDate)
  }

  let currentDate = util.cloneUTCDate(utcDate)

  if (currentMovementAmount !== 0 && !currentMovementAmount) {
    currentMovementAmount = getCurrentMovementAmount(bodyKey, utcDate, currentApparentLongitude)
  }

  if (isRetrograde(currentMovementAmount)) return motionEventObject({utcDate: currentDate, apparentLongitude: currentApparentLongitude, nextMovementAmount: currentMovementAmount, interval: 'second'})

  let intervalUnit
  let intervalAmount
  let fixedDate
  let lastDate = currentDate
  let lastAppLong = currentApparentLongitude
  let lastMovementAmount = currentMovementAmount

  // Binary search
  // Check for event occurance within X days
  // if it occured, divide intervalAmount by 2 until you get exact day
  intervalAmount = averageRetrogradeTable(bodyKey) // days
  while(intervalAmount > 0) {
    const tuningDirection = direction
    intervalUnit = 'date'

    lastDate = util.cloneUTCDate(currentDate)
    lastAppLong = currentApparentLongitude
    lastMovementAmount = currentMovementAmount

    // reset date hours
    currentDate = util.cloneUTCDate(currentDate)
    currentDate.setUTCHours(0)
    currentDate.setUTCMinutes(0)
    currentDate.setUTCSeconds(0)

    // Shifts by 1 day until retrograde date is found
    currentDate = getDirectedDate({amount: intervalAmount, direction: tuningDirection, unit: intervalUnit, utcDate: currentDate});

    ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

    if (isRetrograde(currentMovementAmount)) {
      ({intervalAmount, currentDate, currentApparentLongitude, currentMovementAmount} = resetEventSearch(intervalAmount, lastDate, lastAppLong, lastMovementAmount))
    }
  }

  // NOTE - standardizes the approach to always approach from the past.
  // This is because I've found that calculating the next event can produce varied results when calculating from either the or the past.
  // For example, approaching a retrograde event from the past will find the event at 0:01, and approaching from the future another will find it at 0:50.
  // This seems to be more of an inconsistency or unexpected anomoly in the apparentLongitude calcs than anything else.
  fixedDate = util.cloneUTCDate(lastDate)
  fixedDate = getDirectedDate({amount: 1, direction: 'prev', unit: intervalUnit, utcDate: fixedDate})
  currentDate = fixedDate;

  ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

  intervalAmount = 12 // hours
  while(intervalAmount > 0) {
    // Shifts by 1 hour until the first direct hour is found
    const tuningDirection = 'next'
    intervalUnit = 'hour'

    lastDate = util.cloneUTCDate(currentDate)
    lastAppLong = currentApparentLongitude
    lastMovementAmount = currentMovementAmount

    // reset date minutes
    currentDate = util.cloneUTCDate(currentDate)
    currentDate.setUTCMinutes(0)
    currentDate.setUTCSeconds(0)

    currentDate = getDirectedDate({amount: intervalAmount, direction: tuningDirection, unit: intervalUnit, utcDate: currentDate});

    ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))


    if (direction === 'next' ? isRetrograde(currentMovementAmount) : isDirect(currentMovementAmount)) {
      ({intervalAmount, currentDate, currentApparentLongitude, currentMovementAmount} = resetEventSearch(intervalAmount, lastDate, lastAppLong, lastMovementAmount))
    }
  }

  fixedDate = util.cloneUTCDate(lastDate)
  fixedDate = getDirectedDate({amount: 1, direction: 'prev', unit: intervalUnit, utcDate: fixedDate})
  currentDate = fixedDate;

  ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))


  intervalAmount = 30 // min
  while(intervalAmount > 0) {
    // Shifts by 1 minute until the first direct minute is found
    const tuningDirection = 'next'
    intervalUnit = 'minute'

    lastDate = util.cloneUTCDate(currentDate)
    lastAppLong = currentApparentLongitude
    lastMovementAmount = currentMovementAmount

    // reset date seconds
    currentDate = util.cloneUTCDate(currentDate)
    currentDate.setUTCSeconds(0)

    currentDate = getDirectedDate({amount: intervalAmount, direction: tuningDirection, unit: intervalUnit, utcDate: currentDate});

    ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

    if(direction === 'next' ? isRetrograde(currentMovementAmount) : isDirect(currentMovementAmount)) {
      ({intervalAmount, currentDate, currentApparentLongitude, currentMovementAmount} = resetEventSearch(intervalAmount, lastDate, lastAppLong, lastMovementAmount))
    }
  }

  fixedDate = util.cloneUTCDate(lastDate)
  fixedDate = getDirectedDate({amount: 1, direction: 'prev', unit: intervalUnit, utcDate: fixedDate})
  currentDate = fixedDate;

  ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))


  intervalAmount = 10 // seconds -- kept low for accuracy
  while(intervalAmount > 0) {
    // Shifts by 1 second until the first retrograde second is found
    const tuningDirection = 'next'
    intervalUnit = 'second'

    lastDate = util.cloneUTCDate(currentDate)
    lastAppLong = currentApparentLongitude
    lastMovementAmount = currentMovementAmount

    currentDate = getDirectedDate({amount: intervalAmount, direction: tuningDirection, unit: intervalUnit, utcDate: currentDate});
    ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

    if (direction === 'next' ? isRetrograde(currentMovementAmount) : isDirect(currentMovementAmount)) {
      if (intervalAmount === 1) {
        const finalDate = direction === 'next' ? currentDate : lastDate
        const finalAppLong = direction === 'next' ? currentApparentLongitude : lastAppLong
        const finalMovement = direction === 'next' ? currentMovementAmount : lastMovementAmount
        return motionEventObject({utcDate: finalDate, apparentLongitude: finalAppLong, nextMovementAmount: finalMovement, interval: intervalUnit})

      } else {
        ({intervalAmount, currentDate, currentApparentLongitude, currentMovementAmount} = resetEventSearch(intervalAmount, lastDate, lastAppLong, lastMovementAmount))
      }
    }

    if (intervalAmount < 4 && intervalAmount > 0) {
      // Force to to single search step for best accuracy
      intervalAmount = 1
    }
  }
}


export const calculateNextDirectMoment = ({bodyKey, utcDate, currentApparentLongitude=null, direction='next', currentMovementAmount=null}={}) => {
  if (!['next', 'prev'].includes(direction)) throw new Error(`Please pass in direction from the following: 'next' or 'prev'. Not "${direction}".`)

  if (!currentApparentLongitude) {
    currentApparentLongitude = getApparentLongitude(bodyKey, utcDate)
  }

  let currentDate = util.cloneUTCDate(utcDate)

  if (currentMovementAmount !== 0 && !currentMovementAmount) {
    currentMovementAmount = getCurrentMovementAmount(bodyKey, utcDate, currentApparentLongitude)
  }

  if (isDirect(currentMovementAmount)) return motionEventObject({utcDate, apparentLongitude: currentApparentLongitude, nextMovementAmount: currentMovementAmount, interval: 'second'})

  let intervalUnit
  let intervalAmount
  let fixedDate
  let lastDate = currentDate
  let lastAppLong = currentApparentLongitude
  let lastMovementAmount = currentMovementAmount

  // Binary search
  // Check for event occurance within X days
  // if it occured, divide intervalAmount by 2 until you get exact day
  intervalAmount = averageRetrogradeTable(bodyKey) // days
  while(intervalAmount > 0) {
    const tuningDirection = direction
    intervalUnit = 'date'

    lastDate = util.cloneUTCDate(currentDate)
    lastAppLong = currentApparentLongitude
    lastMovementAmount = currentMovementAmount

    // reset date hours
    currentDate = util.cloneUTCDate(currentDate)
    currentDate.setUTCHours(0)
    currentDate.setUTCMinutes(0)
    currentDate.setUTCSeconds(0)
    // Shifts by 1 day until retrograde date is found
    currentDate = getDirectedDate({amount: intervalAmount, direction: tuningDirection, unit: intervalUnit, utcDate: currentDate});

    ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

    if (isDirect(currentMovementAmount)) {
      ({intervalAmount, currentDate, currentApparentLongitude, currentMovementAmount} = resetEventSearch(intervalAmount, lastDate, lastAppLong, lastMovementAmount))
    }
  }

  // NOTE - standardizes the approach to always approach from the past.
  // This is because I've found that calculating the next event can produce varied results when calculating from either the future or the past.
  // For example, approaching a retrograde event from the past will find the event at 0:01, and approaching from the future another will find it at 0:50.
  // This seems to be more of an inconsistency or unexpected anomoly in the apparentLongitude calcs than anything else.
  fixedDate = util.cloneUTCDate(lastDate)
  fixedDate = getDirectedDate({amount: 1, direction: 'prev', unit: intervalUnit, utcDate: fixedDate})
  currentDate = fixedDate;

  ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

  intervalAmount = 12 // hours
  while(intervalAmount > 0) {
    // Shifts by 1 hour until the first direct hour is found
    const tuningDirection = 'next'
    intervalUnit = 'hour'

    lastDate = util.cloneUTCDate(currentDate)
    lastAppLong = currentApparentLongitude
    lastMovementAmount = currentMovementAmount

    // reset date minutes
    currentDate = util.cloneUTCDate(currentDate)
    currentDate.setUTCMinutes(0)
    currentDate.setUTCSeconds(0)

    currentDate = getDirectedDate({amount: intervalAmount, direction: tuningDirection, unit: intervalUnit, utcDate: currentDate});

    ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

    if (direction === 'next' ? isDirect(currentMovementAmount) : isRetrograde(currentMovementAmount)) {
      ({intervalAmount, currentDate, currentApparentLongitude, currentMovementAmount} = resetEventSearch(intervalAmount, lastDate, lastAppLong, lastMovementAmount))
    }
  }

  fixedDate = util.cloneUTCDate(lastDate)
  fixedDate = getDirectedDate({amount: 1, direction: 'prev', unit: intervalUnit, utcDate: fixedDate})
  currentDate = fixedDate;

  ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

  intervalAmount = 30 // min
  while(intervalAmount > 0) {
    // Shifts by 1 minute until the first direct minute is found
    const tuningDirection = 'next'
    intervalUnit = 'minute'

    lastDate = util.cloneUTCDate(currentDate)
    lastAppLong = currentApparentLongitude
    lastMovementAmount = currentMovementAmount

    // reset date seconds
    currentDate = util.cloneUTCDate(currentDate)
    currentDate.setUTCSeconds(0)

    currentDate = getDirectedDate({amount: intervalAmount, direction: tuningDirection, unit: intervalUnit, utcDate: currentDate});

    ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

    if(direction === 'next' ? isDirect(currentMovementAmount) : isRetrograde(currentMovementAmount)) {
      ({intervalAmount, currentDate, currentApparentLongitude, currentMovementAmount} = resetEventSearch(intervalAmount, lastDate, lastAppLong, lastMovementAmount))
    }
  }

  fixedDate = util.cloneUTCDate(lastDate)
  fixedDate = getDirectedDate({amount: 1, direction: 'prev', unit: intervalUnit, utcDate: fixedDate})
  currentDate = fixedDate;

  ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

  intervalAmount = 10 // seconds -- kept low for accuracy
  while(intervalAmount > 0) {
    // Shifts by 1 second until the first retrograde second is found
    const tuningDirection = 'next'
    intervalUnit = 'second'

    lastDate = util.cloneUTCDate(currentDate)
    lastAppLong = currentApparentLongitude
    lastMovementAmount = currentMovementAmount

    currentDate = getDirectedDate({amount: intervalAmount, direction: tuningDirection, unit: intervalUnit, utcDate: currentDate});

    ({currentApparentLongitude, currentMovementAmount} = getMotion(bodyKey, currentDate))

    if (direction === 'next' ? isDirect(currentMovementAmount) : isRetrograde(currentMovementAmount)) {
      if (intervalAmount === 1) {
        const finalDate = direction === 'next' ? currentDate : lastDate
        const finalAppLong = direction === 'next' ? currentApparentLongitude : lastAppLong
        const finalMovement = direction === 'next' ? currentMovementAmount : lastMovementAmount
        return motionEventObject({utcDate: finalDate, apparentLongitude: finalAppLong, nextMovementAmount: finalMovement, interval: intervalUnit})

      } else {
        ({intervalAmount, currentDate, currentApparentLongitude, currentMovementAmount} = resetEventSearch(intervalAmount, lastDate, lastAppLong, lastMovementAmount))
      }
    }

    if (intervalAmount < 4 && intervalAmount > 0) {
      // Force to to single search step for best accuracy
      intervalAmount = 1
    }
  }
}

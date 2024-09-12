class Demo {
  constructor() {
    this.form = document.querySelector('#form')
    this.dateInput = document.querySelector('#date')
    this.timeInput = document.querySelector('#time')
    this.latitudeInput = document.querySelector('#latitude')
    this.longitudeInput = document.querySelector('#longitude')
    this.moonQuarterApproximationInput = document.querySelector('#moonQuarterApproximation')
    this.moonTable = document.querySelector('#moon')
    this.moonOrbitTable = document.querySelector('#moonOrbit')

    this.calcShadowsCheckbox = document.querySelector('#calcShadows')


    this.handleSubmit = this.handleSubmit.bind(this)

    this.form.addEventListener('submit', this.handleSubmit)
  }

  handleSubmit(e) {
    e.preventDefault()
    const date = this.dateInput.value.split('-')
    const time = this.timeInput.value.split(':')
    const origin = {
      year: parseInt(date[0]),
      month: parseInt(date[1] - 1),
      day: parseInt(date[2]),
      hours: parseInt(time[0]),
      minutes: parseInt(time[1]),
      seconds: 0,
      latitude: parseFloat(this.latitudeInput.value),
      longitude: parseFloat(this.longitudeInput.value),
      moonQuarterApproximationValue: this.moonQuarterApproximationInput.value
    }

  const showShadows = this.calcShadowsCheckbox.checked
  const ephemeris = new Ephemeris.default({...origin, calculateShadows: showShadows})
  console.log(`EPHEMERIS: `, ephemeris)
  console.log(`EPHEMERIS RESULTS FOR ${this.dateInput.value} -- ${this.timeInput.value} UTC}`, ephemeris.Results)

  ephemeris.Results.forEach(result => {
    const ddEl = document.querySelector(`#${result.key}-dd`)
    if (ddEl) ddEl.innerHTML = result.position.apparentLongitude.toFixed(4)

    const dmsEl = document.querySelector(`#${result.key}-dms`)
    if (dmsEl) dmsEl.innerHTML = result.position.apparentLongitudeString

    const retroEl = document.querySelector(`#${result.key}-motion`)
    const isRetrograde = result.motion.isRetrograde ? 'Retrograde' : 'Direct'
    if (retroEl) retroEl.innerHTML = isRetrograde
    if (showShadows && retroEl) {
      if (result.motion.withinPreRetrogradeShadow) {
        retroEl.innerHTML = `${isRetrograde}, Pre-retrograde shadow`
      }

      if (result.motion.withinPostRetrogradeShadow) {
        retroEl.innerHTML = `${isRetrograde}, Post-retrograde shadow`
      }
    }
  })

  const moonTableEls = this.moonTable.querySelectorAll('tbody td')
  moonTableEls[0].innerHTML = ephemeris.moon.position.shapeDirectionString
  moonTableEls[1].innerHTML = ephemeris.moon.position.shapeString
  moonTableEls[2].innerHTML = ephemeris.moon.position.quarterApproximationDirectionString
  moonTableEls[3].innerHTML = ephemeris.moon.position.quarterApproximationString || `${ephemeris.moon.position.shapeDirectionString} ${ephemeris.moon.position.shapeString}`
  moonTableEls[4].innerHTML = ephemeris.moon.position.illuminatedFraction
  moonTableEls[5].innerHTML = ephemeris.moon.position.phaseDecimal

  const moonOrbitTableEls = this.moonOrbitTable.querySelectorAll('tbody td')
  moonOrbitTableEls[0].innerHTML = ephemeris.moon.orbit.meanAscendingNode.apparentLongitude
  moonOrbitTableEls[1].innerHTML = ephemeris.moon.orbit.meanDescendingNode.apparentLongitude
  moonOrbitTableEls[2].innerHTML = ephemeris.moon.orbit.meanPerigee.apparentLongitude
  moonOrbitTableEls[3].innerHTML = ephemeris.moon.orbit.meanApogee.apparentLongitude
  }
}

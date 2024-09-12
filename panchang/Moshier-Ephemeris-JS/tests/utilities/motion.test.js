import {getDirectedDate, calculateNextRetrogradeStation, calculateNextDirectStation, calculateNextRetrogradeMoment, calculateNextDirectMoment } from '../../src/utilities/motion'

describe('getDirectedDate', () => {
  const utcDate = new Date(Date.UTC(2019, 9, 31, 0, 0)) // 10/31/2019 midnight UTC
  describe('errors', () => {
    it('throws invalid direction error', () => {
      expect(() => getDirectedDate({amount:1, direction: 'bad direction', unit: 'date', utcDate})).toThrowError("Please pass in direction from the following: 'next' or 'prev'. Not \"bad direction\".")
    })

    it('throws invalid unit error', () => {
      expect(() => getDirectedDate({amount:1, direction: 'next', unit: 'bad unit', utcDate})).toThrowError("Please pass in unit from the following: 'date', 'hour', 'minute', or 'second'. Not \"bad unit\".")
    })
  })

  describe('next', () => {
    it('finds the next date', () => {
      const newDate = getDirectedDate({amount: 1, direction: 'next', unit: 'date', utcDate})
      expect(newDate).toEqual(new Date("2019-11-01T00:00:00.000Z")) // 11/1/2019 midnight UTC
    })

    it('finds the next hour', () => {
      const newDate = getDirectedDate({amount: 1, direction: 'next', unit: 'hour', utcDate})
      expect(newDate).toEqual(new Date("2019-10-31T01:00:00.000Z")) // 10/31/2019 00:01:00 UTC
    })

    it('finds the next minute', () => {
      const newDate = getDirectedDate({amount: 1, direction: 'next', unit: 'minute', utcDate})
      expect(newDate).toEqual(new Date("2019-10-31T00:01:00.000Z")) // 10/31/2019 00:01:00 UTC
    })

    it('finds the next second', () => {
      const newDate = getDirectedDate({amount: 1, direction: 'next', unit: 'second', utcDate})
      expect(newDate).toEqual(new Date("2019-10-31T00:00:01.000Z")) // 10/31/2019 00:00:01 UTC
    })

    it('finds the next 3 days', () => {
      const newDate = getDirectedDate({amount: 3, direction: 'next', unit: 'date', utcDate})
      expect(newDate).toEqual(new Date("2019-11-03T00:00:00.000Z")) // 11/1/2019 midnight UTC
    })
  })

  describe('prev', () => {
    it('finds the prev date', () => {
      const newDate = getDirectedDate({amount: 1, direction: 'prev', unit: 'date', utcDate})
      expect(newDate).toEqual(new Date("2019-10-30T00:00:00.000Z")) // 10/30/2019 midnight UTC
    })

    it('finds the prev minute', () => {
      const newDate = getDirectedDate({amount: 1, direction: 'prev', unit: 'minute', utcDate})
      expect(newDate).toEqual(new Date("2019-10-30T23:59:00.000Z")) // 10/30/2019 23:59 UTC
    })

    it('finds the prev 3 days', () => {
      const newDate = getDirectedDate({amount: 3, direction: 'prev', unit: 'date', utcDate})
      expect(newDate).toEqual(new Date("2019-10-28T00:00:00.000Z")) // 11/1/2019 midnight UTC
    })
  })
})

describe('calculateNextRetrogradeStation', () => {
  describe('in a direct datetime', () => {
    describe('next', () => {

      it('finds the next retrograde station', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 0, 0)) // direct 10/31/2019 midnight UTC
        const station = calculateNextRetrogradeStation({direction: 'next', bodyKey: 'mercury', utcDate})

        expect(station.date).toEqual(new Date("2019-10-31T15:42:26.000Z")) // 10/31/2019 15:42:26 UTC
        expect(station.apparentLongitude).toEqual(237.6378590865681)
        expect(station.nextMovementAmount).toEqual(-1.4779288903810084e-12)

      })
    })

    describe('prev', () => {
      it('finds the prev retrograde station', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 0, 0)) // direct 10/31/2019 midnight UTC
        const station = calculateNextRetrogradeStation({direction: 'prev', bodyKey: 'mercury', utcDate})

        expect(station.date).toEqual(new Date("2019-07-07T23:15:03.000Z")) // 7/7/2019 23:15:03 UTC
        expect(station.apparentLongitude).toEqual(124.46499250819278)
        expect(station.nextMovementAmount).toEqual(-1.043076736095827e-11)

      })
    })
  })

  describe('in a retrograde datetime', () => {
    describe('next', () => {
      it('finds the next retrograde station', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 20, 0)) // retrograde 10/31/2019 20:00 UTC
        const station = calculateNextRetrogradeStation({bodyKey: 'mercury', utcDate})

        expect(station.date).toEqual(new Date("2020-02-17T00:54:58.000Z")) // 11/20/2019 19:12:36 UTC
        expect(station.apparentLongitude).toEqual(342.88971141888965)
        expect(station.nextMovementAmount).toEqual(-5.3717030823463574e-11)
      })
    })

    describe('prev', () => {
      it('finds the prev retrograde station', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 20, 0)) // retrograde 10/31/2019 20:00 UTC
        const station = calculateNextRetrogradeStation({direction: 'prev', bodyKey: 'mercury', utcDate})


        expect(station.date).toEqual(new Date("2019-10-31T15:42:26.000Z")) // 10/31/2019 15:42:26 UTC
        expect(station.apparentLongitude).toEqual(237.6378590865681)
        expect(station.nextMovementAmount).toEqual(-1.4779288903810084e-12)

      })
    })
  })
})

describe('calculateNextDirectStation', () => {
  describe('in a direct datetime', () => {
    describe('next', () => {

      it('finds the next direct station', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 0, 0)) // direct 10/31/2019 midnight UTC
        const station = calculateNextDirectStation({direction: 'next', bodyKey: 'mercury', utcDate})

        expect(station.date).toEqual(new Date("2019-11-20T19:12:56.000Z")) // 10/31/2019 19:12:56 UTC
        expect(station.apparentLongitude).toEqual(221.58646545441988)
        expect(station.nextMovementAmount).toEqual(4.974367584509309e-10)
      })
    })

    describe('prev', () => {
      it('finds the prev direct station', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 0, 0)) // direct 10/31/2019 midnight UTC
        const station = calculateNextDirectStation({direction: 'prev', bodyKey: 'mercury', utcDate})

        expect(station.date).toEqual(new Date("2019-08-01T03:58:38.000Z")) // 8/1/2019 3:59:01 UTC
        expect(station.apparentLongitude).toEqual(113.94763604909872)
        expect(station.nextMovementAmount).toEqual(2.5977442419389263e-11)

      })
    })
  })

  describe('in a retrograde datetime', () => {
    describe('next', () => {
      it('finds the next direct station', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 20, 0)) // retrograde 10/31/2019 20:00 UTC
        const station = calculateNextDirectStation({bodyKey: 'mercury', utcDate})

        expect(station.date).toEqual(new Date("2019-11-20T19:12:56.000Z")) // 11/20/2019 19:12:56 UTC
        expect(station.apparentLongitude).toEqual(221.58646545441988)
        expect(station.nextMovementAmount).toEqual(4.974367584509309e-10)

      })
    })

    describe('prev', () => {
      it('finds the prev direct station', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 20, 0)) // retrograde 10/31/2019 20:00 UTC
        const station = calculateNextDirectStation({direction: 'prev', bodyKey: 'mercury', utcDate})


        expect(station.date).toEqual(new Date("2019-08-01T03:58:38.000Z")) // 10/31/2019 15:42:26 UTC
        expect(station.apparentLongitude).toEqual(113.94763604909872)
        expect(station.nextMovementAmount).toEqual(2.5977442419389263e-11)

      })
    })
  })
})

describe('calculateNextRetrogradeMoment', () => {
  describe('in a direct datetime', () => {
    describe('next', () => {

      it('finds the next retrograde moment', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 0, 0)) // direct 10/31/2019 midnight UTC

        const moment = calculateNextRetrogradeMoment({bodyKey: 'mercury', utcDate, direction: 'next'})

        expect(moment.date).toEqual(new Date("2019-10-31T15:42:26.000Z")) // 10/31/2019 15:42:55 UTC

        expect(moment.apparentLongitude).toEqual(237.6378590865681)
        expect(moment.nextMovementAmount).toEqual(-1.4779288903810084e-12)
      })
    })

    describe('prev', () => {
      it('finds the prev retrograde moment', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 0, 0)) // direct 10/31/2019 midnight UTC

        const moment = calculateNextRetrogradeMoment({bodyKey: 'mercury', utcDate, direction: 'prev'})

        expect(moment.date).toEqual(new Date("2019-08-01T03:58:37.000Z")) // 8/01/2019 03:59:22 UTC

        expect(moment.apparentLongitude).toEqual(113.94763604971418)
        expect(moment.nextMovementAmount).toEqual(-6.154436960059684e-10)
      })
    })
  })

  describe('in a retrograde datetime', () => {
    it('returns the given retrograde moment', () => {
      const utcDate = new Date(Date.UTC(2019, 9, 31, 20, 0)) // retrograde on 10/31/2019 20:00 UTC

      const moment = calculateNextRetrogradeMoment({bodyKey: 'mercury', utcDate})

      expect(moment.date).toEqual(new Date("2019-10-31T20:00:00.000Z")) // 10/31/2019 20:00 UTC

      expect(moment.apparentLongitude).toEqual(237.63563852193388)
      expect(moment.nextMovementAmount).toEqual(-2.883943750475737e-7)
    })
  })
})

describe('calculateNextDirectMoment', () => {
  describe('in a direct datetime', () => {
    it('returns the given direct moment', () => {
      const utcDate = new Date(Date.UTC(2019, 9, 31, 0, 0)) // direct 10/31/2019 midnight UTC

      const moment = calculateNextDirectMoment({bodyKey: 'mercury', utcDate})

      expect(moment.date).toEqual(new Date("2019-10-31T00:00:00.000Z")) // 10/31/2019 00:00 UTC

      expect(moment.apparentLongitude).toEqual(237.60866592301215)
      expect(moment.nextMovementAmount).toEqual(0.0000010243777808227605)

    })
  })

  describe('in a retrograde datetime', () => {
    describe('next', () => {
      it('finds the next direct moment', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 20, 0)) // retrograde on 10/31/2019 20:00 UTC

        const moment = calculateNextDirectMoment({bodyKey: 'mercury', utcDate, direction: 'next'})

        expect(moment.date).toEqual(new Date("2019-11-20T19:12:56.000Z")) // 11/20/2019 19:12:56 UTC

        expect(moment.apparentLongitude).toEqual(221.58646545441988)
        expect(moment.nextMovementAmount).toEqual(4.974367584509309e-10)
      })
    })

    describe('prev', () => {
      it('finds the prev direct moment', () => {
        const utcDate = new Date(Date.UTC(2019, 9, 31, 20, 0)) // retrograde on 10/31/2019 20:00 UTC

        const moment = calculateNextDirectMoment({bodyKey: 'mercury', utcDate, direction: 'prev'})

        expect(moment.date).toEqual(new Date("2019-10-31T15:42:25.000Z")) // 10/31/2019 15:42 UTC

        expect(moment.apparentLongitude).toEqual(237.6378590859976)
        expect(moment.nextMovementAmount).toEqual(5.705089733964996e-10)

      })
    })
  })
})

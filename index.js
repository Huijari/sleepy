import inferno from 'inferno'
import { combine, merge, of } from 'most'

import calculateSleepTimes from './h/calculateSleepTimes'
import Div from './h/div'
import SleepAt from './c/sleepAt'
import WakeUpAt from './c/wakeUpAt'

const wakeUpAt = WakeUpAt()
const sleepAt = SleepAt(
  wakeUpAt.value$
    .map(calculateSleepTimes)
    .map(times => times.join(' or '))
)

const bottom = merge(
  of(Div()),
  sleepAt.vtree$.sampleWith(wakeUpAt.value$)
)

const vtree$ = combine(
  Div,
  wakeUpAt.vtree$,
  bottom
)

const el = document.querySelector('main')
vtree$.observe(vtree =>
  inferno.render(vtree, el)
)

import { combine } from 'most'
import h from 'inferno-hyperscript'

import Button from './button'
import Input from './input'

const WakeUpAt = () => {
  const time = Input('Wake up at', 'time')
  const calculate = Button('calculate')

  const value$ = time.value$
    .sampleWith(calculate.click$)
  const vtree$ = combine(
    (timeV, calculateV) => h('div', [ timeV, calculateV ]),
    time.vtree$,
    calculate.vtree$
  )

  return { value$, vtree$ }
}

export default WakeUpAt

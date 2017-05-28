import { combine } from 'most'

import Button from './button'
import Div from './h/div'
import Input from './input'

const WakeUpAt = () => {
  const time = Input('Wake up at', 'time')
  const calculate = Button('calculate')

  const value$ = time.value$
    .sampleWith(calculate.click$)
  const vtree$ = combine(
    Div,
    time.vtree$,
    calculate.vtree$
  )

  return { value$, vtree$ }
}

export default WakeUpAt

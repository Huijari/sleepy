import Input from '../a/input'

const WakeUpAt = () => {
  const time = Input('To wake up at', 'time')

  const value$ = time.value$
  const vtree$ = time.vtree$

  return { value$, vtree$ }
}

export default WakeUpAt

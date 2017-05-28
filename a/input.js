import h from 'inferno-hyperscript'
import moist from 'moisture'
import { of } from 'most'

const Input = (label, type) => {
  const value$ = moist()

  const vtree$ = of(h('label', [
    `${label}`,
    h('input', {
      type,
      oninput: e => value$.emit(e.target.value)
    })
  ]))

  return { value$, vtree$ }
}

export default Input

import h from 'inferno-hyperscript'
import moist from 'moisture'
import { of } from 'most'

const inputClassName = 'input-reset bn mh2 bg-purple white'

const Input = (label, type) => {
  const value$ = moist()

  const vtree$ = of(h('label', [
    `${label}`,
    h('input', {
      className: inputClassName,
      type,
      oninput: e => value$.emit(e.target.value)
    })
  ]))

  return { value$, vtree$ }
}

export default Input

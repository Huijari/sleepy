import h from 'inferno-hyperscript'
import moist from 'moisture'
import { of } from 'most'

const Button = label => {
  const click$ = moist()

  const vtree$ = of(h('button', {
    type: 'button',
    onclick: e => click$.emit(e)
  },
    `${label}`
  ))

  return { click$, vtree$ }
}

export default Button

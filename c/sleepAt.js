import h from 'inferno-hyperscript'

const SleepAt = times$ => {
  const vtree$ = times$.map(times =>
    h('p', `You should go to bed at ${times}.`)
  )

  return { vtree$ }
}

export default SleepAt

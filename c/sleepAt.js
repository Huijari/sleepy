import h from 'inferno-hyperscript'

const SleepAt = hour$ => {
  const vtree$ = hour$.map(hour =>
    h('p', `You need to sleep at ${hour}`)
  )

  return { vtree$ }
}

export default SleepAt

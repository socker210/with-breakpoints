export default matches => mq => {
  const listener = []

  return {
    matches: matches,
    media: mq,
    addListener: func => listener.push(func),
    removeListener: func => listener.splice(listener.indexOf(func), 1),
    execListener: (...args) => listener.map(l => l(...args)),
    find: func => !!listener.filter(l => func === l).length
  }
}
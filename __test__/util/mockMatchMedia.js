export default matches => mq => {
  const listener = []

  return {
    matches: matches,
    media: mq,
    addListener: (func) => listener.push(func),
    removeListener: (func) => listener.splice(listener.indexOf(func), 1),
    find: (func) => !!listener.filter(l => func === l).length
  }
}
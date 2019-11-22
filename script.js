const pc1 = new DrawableCanvas(document.getElementById('p1'))
const pc2 = new DrawableCanvas(document.getElementById('p2'))
const pc3 = new DrawableCanvas(document.getElementById('p3'))
const nc1 = new DrawableCanvas(document.getElementById('n1'))
const nc2 = new DrawableCanvas(document.getElementById('n2'))
const nc3 = new DrawableCanvas(document.getElementById('n3'))
const gc = new DrawableCanvas(document.getElementById('g'))
const net = new brain.NeuralNetwork()
train.addEventListener('click', () => {
  const data = []
  data.push({ input: pc1.getVector(dbg.checked), output: { positive: 1 } })
  data.push({ input: pc2.getVector(dbg.checked), output: { positive: 1 } })
  data.push({ input: pc3.getVector(dbg.checked), output: { positive: 1 } })
  data.push({ input: nc1.getVector(dbg.checked), output: { negative: 1 } })
  data.push({ input: nc2.getVector(dbg.checked), output: { negative: 1 } })
  data.push({ input: nc3.getVector(dbg.checked), output: { negative: 1 } })
  const result = net.train(data, { log: true })
  err.innerHTML = result.error
  iterations.innerHTML = result.iterations
  res.removeAttribute('style')
})
guess.addEventListener('click', () => {
  const result = brain.likely(gc.getVector(), net)
  alert(result)
  gc.reset()
})
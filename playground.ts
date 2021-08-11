export default function play() {
  const random = Math.random() > 0.5 ? 'Hello' : [1,2]
  
  if (typeof random === 'string') {
    const upper = random.toUpperCase()
    console.info('string', upper)
  } else {
    console.info('number', random)
  }

  console.info(random.length)
}
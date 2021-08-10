export default function play() {
  const name: string = 'hello'
  const age: number = 30

  function logPersonInfo(personName: string, personAge: number) {
    const info = `Name: ${personName}, age: ${personAge}`
    console.info(info)
    return info
  }

  logPersonInfo(name, age)
}

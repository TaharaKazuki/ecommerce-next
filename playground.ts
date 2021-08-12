interface Person {
  name: string
  age: number
  city: string
}


class Student implements Person {
  name = ''
  age = 0
  city = ''
}

class BussinessPerson implements Person {
  name = ''
  age = 0
  city = ''
  salary = 1000
}

interface Car {
  name: 'string'
}

class Logger<T extends Person> {
  log(items: Array<T>, callback: (i:T) => void) {
    items.forEach((itme) => {
      callback(itme)
    })
  }
}

export default function play() {
  const logger = new Logger<BussinessPerson>()

  const persons = [{name: 'filip', age: 30, city: '', salary: 30}]

  logger.log(persons, (person) => {
    console.info(person)
  })
}

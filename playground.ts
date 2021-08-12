interface Person {
  name: string
  age: number
}

class Logger<T> {
  log(items: Array<T>, callback: (i:T) => void) {
    items.forEach((itme) => {
      callback(itme)
    })
  }
}

export default function play() {
  const logger = new Logger<string>()

  const cars = ['audi', 'skoda', 'citroen']
  logger.log(cars, (car) => {
    console.info(car)
  })

  const logger2 = new Logger<number>()

  const numbers = [1,2,3,4]
  logger2.log(numbers, (num) => {
    console.info(num)
  })

  const logger3 = new Logger<Person>()

  const persons = [{name: 'filip', age: 30}, {name: 'john', age: 20}]

  logger3.log(persons, (person) => {
    console.info(person)
  }) 
}

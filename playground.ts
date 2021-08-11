interface Person {
  kind: 'business' | 'academic' | 'otherType'
  name: string
  age: number
}

interface BusinessPerson extends Person {
  kind: 'business'
  salary: number
}

interface AcademicPerson extends Person {
  kind: 'academic'
  publications: string[]
}

type Human =
  | BusinessPerson
  | AcademicPerson
  | { kind: 'otherType'; special: string }

type RaceCar = {
  name: string
  team: string
  maxSpeed: 200
}

type CityCar = {
  name: string
  space: string
  maxSpeed: 100
}

type Car = RaceCar | CityCar

export default function play() {
  const car: RaceCar = {
    name: 'Race car',
    maxSpeed: 200,
    team: 'ferari'
  }

  function logPersonInfo(human: Human) {
    if (human.kind === 'academic') {
      console.info(human)
    } else if (human.kind === 'business') {
      console.info(human)
    } else if (human.kind === 'otherType') {
      console.info(human)
    } else {
      console.info(human)
    }
  }

  function logCarInfo(car: Car) {
    switch (car.maxSpeed) {
      case 200:
        console.info(car)
        break
      case 100:
        console.info(car)
        break
      default:
        console.info(car)
    }
  }
}

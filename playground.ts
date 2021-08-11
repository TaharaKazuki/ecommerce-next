interface Person {
  name: string
  age: number
}

interface BusinessPerson extends Person {
  salary: number
}

interface AcademicPerson extends Person {
  publications: string[]
}

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

  function logCarInfo(car: Car) {
    console.info(car.name)

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

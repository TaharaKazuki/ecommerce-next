interface Person {
  name: string
}

interface Student extends Person {
  age: number
}

interface PostGraduadeStudent extends Person {
  projects: string[]
}

type StudentInfo<T extends any = Student> = T extends Student
  ? {
      data: T
      grades: number[]
    }
  : string

type Car = { engine: string }

export default function play() {
  function logStudentInfo(info: StudentInfo<Student>) {
    console.info(info)
  }
  const info = {
    data: {
      name: 'filip',
      age: 30
    },
    grades: [1]
  }

  logStudentInfo(info)
}

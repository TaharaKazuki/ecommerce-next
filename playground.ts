interface Person {
  name: string
}


interface Student extends Person {
  age: number
}

interface PostGraduadeStudent extends Person {
  age: number
  project: string[]
}

interface StudentInfo<T extends Student = Student>{
  data: T
  grades: number[]
}

export default function play() {
  function logStudentInfo(info: StudentInfo<PostGraduadeStudent>){
    console.info(info.data.name)
    console.info(info.data.age)
    console.info(info.data.project)
  }

  const info = {
    data: {
      name: 'Filip',
      age: 30,
      project: ['']
    },
    grades: [1]
  }

  logStudentInfo(info)
}

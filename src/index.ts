import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses, students } from './database'
import { COURSE_STACK, TCourse, TStudents } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

//endpoint para pegar getAllCourses

app.get("/courses", (req: Request, res: Response) => {
    res.status(200).send(courses)
})

//getCourseByName
app.get("/courses/search", (req: Request, res: Response) => {
    const q = req.query.q as string
    const result = q ?
        courses.filter(item => item.name.toLowerCase().includes(q.toLowerCase()))
        :
        courses
    res.status(200).send(result)
})

//adicionamos uma query com uma interrogação (ja no postman), ai escrevemos "?q=" ja que "q" é o q atribuimos como query.. mas podia ser outra coisa... ai ele faz a busca

// createCourse
app.post("/courses", (req: Request, res: Response) => {
    const id: string = req.body.id
    const name: string = req.body.name
    const lessons: number = req.body.lessons
    const stack: COURSE_STACK = req.body.stack

    //podia escrever "as string" no final tambem.. funciona igual
    // const {id, name, lessons, stack}: TCourse = req.body

    const newCourse: TCourse = {
        id,
        name,
        lessons,
        stack
    }

    courses.push(newCourse)
    console.log("Cursos", courses);
    res.status(201).send("Curso criado com Sucesso")
})

//endpoint para pegar getAllStudents

app.get("/students", (req: Request, res: Response) => {
    res.status(200).send(students)
})

//endpoint para pegar getStudentsByName
app.get("/students/search", (req: Request, res: Response) => {
    const q = req.query.q as string
    const result = q ?
        students.filter(student => student.name.toLowerCase().includes(q.toLowerCase()))
        :
        students
    res.status(200).send(result)
})

//adicionamos uma query com uma interrogação (ja no postman), ai escrevemos "?q=" ja que "q" é o q atribuimos como query.. mas podia ser outra coisa... ai ele faz a busca

// endpoint para criar createStudent

app.post("/students", (req: Request, res: Response) => {
    const id: string = req.body.id
    const name: string = req.body.name
    const age: number = req.body.age

    // const {id, name, age} = req.body as TStudents

    const newStudent: TStudents = {
        id,
        name,
        age
    }

    students.push(newStudent)
    console.log("Estudantes", students);
    res.status(201).send("Aluno Criado")
})

// app.post("/courses", (req: Request, res: Response) => {
//     const id: string = req.body.id
//     const name: string = req.body.name
//     const lessons: number = req.body.lessons
//     const stack: COURSE_STACK = req.body.stack

//     //podia escrever "as string" no final tambem.. funciona igual
//     // const {id, name, lessons, stack}: TCourse = req.body

//     const newCourse: TCourse = {
//         id,
//         name,
//         lessons,
//         stack
//     }

//     courses.push(newCourse)
//     console.log("Cursos", courses);
//     res.status(201).send("Curso criado com Sucesso")
// })
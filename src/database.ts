import { COURSE_STACK, TCourse, TStudents } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

export const students: TStudents[] = [
    {
        id:"S001",
        name: "Renan",
        age: 37
    },
    {
        id:"S002",
        name: "Nathalia",
        age: 24
    },
]
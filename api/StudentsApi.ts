import Student, { StudentWithoutId } from "@/interfaces/Student";

export namespace StudentsApi {
    export async function readAllStudents(uid: string): Promise<Student[]> {
        return [
            {
                id: "00001",
                name: "John",
                phone: "77833213740",
                email: "tonghohin77@gmail.com",
                availability: [
                    { day: 0, from: "09:00:00", to: "17:00:00", available: true },
                    { day: 1, from: "09:00:00", to: "17:00:00", available: true },
                    { day: 2, from: null, to: null, available: false },
                    { day: 3, from: "09:00:00", to: "17:00:00", available: true },
                    { day: 4, from: "09:00:00", to: "17:00:00", available: true },
                    { day: 5, from: "09:00:00", to: "17:00:00", available: true },
                    { day: 6, from: null, to: null, available: false }
                ]
            },
            {
                id: "00002",
                name: "Peter",
                phone: "38475693600",
                email: "peter@pan.com",
                availability: [
                    { day: 0, from: "10:00:00", to: "17:00:00", available: true },
                    { day: 1, from: "10:00:00", to: "17:00:00", available: true },
                    { day: 2, from: null, to: null, available: false },
                    { day: 3, from: "10:00:00", to: "17:00:00", available: true },
                    { day: 4, from: "10:00:00", to: "17:00:00", available: true },
                    { day: 5, from: "10:00:00", to: "17:00:00", available: true },
                    { day: 6, from: null, to: null, available: false }
                ]
            },
            {
                id: "00003",
                name: "Momo",
                phone: "3763847290",
                email: "momo@gmail.com",
                availability: [
                    { day: 0, from: "11:00:00", to: "17:00:00", available: true },
                    { day: 1, from: "11:00:00", to: "17:00:00", available: true },
                    { day: 2, from: null, to: null, available: false },
                    { day: 3, from: "11:00:00", to: "17:00:00", available: true },
                    { day: 4, from: "11:00:00", to: "17:00:00", available: true },
                    { day: 5, from: "11:00:00", to: "17:00:00", available: true },
                    { day: 6, from: null, to: null, available: false }
                ]
            }
        ];
    }

    export async function readOneStudent(uid: string, studentId: string): Promise<Student | undefined> {
        const students = await readAllStudents(uid);
        const student = students.find((student) => student.id === studentId);
        return student;
    }

    export async function createStudent(student: StudentWithoutId) {
        console.log("createStudent --- student", student);
        return student;
    }

    export async function updateStudent(student: Partial<Student>) {
        console.log("updateStudent --- student", student);
        return student;
    }

    export async function deleteStudent(studentId: string) {
        console.log("deleteStudent --- studentId", studentId);
        return studentId;
    }
}

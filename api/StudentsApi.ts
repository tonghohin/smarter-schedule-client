import configuration from "@/configuration.json";
import Student from "@/interfaces/Student";

export namespace StudentsApi {
    export async function readStudents(uid: string): Promise<Student[]> {
        try {
            const res = await fetch(`${configuration.backend}/students/${uid}`, { cache: "no-cache" });
            const students = await res.json();
            if (students.error) throw new Error(students.error);
            return students;
        } catch (error) {
            console.error("error", error);
            if (error instanceof Error) {
                throw error.message;
            }
            return [];
        }
    }

    export async function readStudent(uid: string, studentId: string): Promise<Student | undefined> {
        const students = await readStudents(uid);
        const student = students.find((student) => student.id === Number(studentId));
        return student;
    }

    export async function createStudent(uid: string, student: Student): Promise<Student | undefined> {
        try {
            const res = await fetch(`${configuration.backend}/students/${uid}`, {
                cache: "no-cache",
                method: "POST",
                body: JSON.stringify(student),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const createdStudent = await res.json();
            if (createdStudent.error) throw new Error(createdStudent.error);
            return createdStudent;
        } catch (error) {
            console.error("error", error);
            if (error instanceof Error) {
                throw error.message;
            }
        }
    }

    export async function updateStudent(student: Student): Promise<Student | undefined> {
        try {
            const res = await fetch(`${configuration.backend}/students`, {
                cache: "no-cache",
                method: "PUT",
                body: JSON.stringify(student),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const updatedStudent = await res.json();
            if (updatedStudent.error) throw new Error(updatedStudent.error);
            return updatedStudent;
        } catch (error) {
            console.error("error", error);
            if (error instanceof Error) {
                throw error.message;
            }
        }
    }

    export async function deleteStudent(studentId?: number) {
        if (!studentId) return;

        try {
            const res = await fetch(`${configuration.backend}/students/${studentId}`, {
                method: "DELETE"
            });
        } catch (error) {
            console.error("error", error);
            if (error instanceof Error) {
                throw error.message;
            }
        }
    }
}

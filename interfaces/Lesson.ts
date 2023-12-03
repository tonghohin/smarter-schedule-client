import Student from "./Student";

export default interface Lesson {
    id?: number;
    date: Date;
    from: string;
    to: string;
    student: number;
    user: number;
}

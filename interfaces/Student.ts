import Availability from "./Availability";

export default interface Student {
    id: string;
    name: string;
    phone: string;
    email: string;
    availability: Availability[];
}

export interface StudentWithoutId extends Omit<Student, "id"> {}

import Availability from "./Availability";

export default interface Student {
    id?: number;
    name: string;
    phone: string;
    email: string;
    availability: Availability[];
    active: boolean;
}

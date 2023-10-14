import Availability from "./Availability";

export default interface User {
    id: number;
    uid: string;
    name: string;
    phone: string;
    availability: Availability[];
}

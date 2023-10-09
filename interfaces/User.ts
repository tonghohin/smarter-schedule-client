import Availability from "./Availability";

export default interface User {
    id: string;
    uid: string;
    name: string;
    phone: string;
    availability: Availability[];
}

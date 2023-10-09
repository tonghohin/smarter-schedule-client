import Availability from "@/interfaces/Availability";
import { StudentWithoutId } from "@/interfaces/Student";

export namespace InitialStates {
    export const AVAILABILITY: Availability[] = [
        {
            day: 0,
            from: null,
            to: null,
            available: false
        },
        {
            day: 1,
            from: null,
            to: null,
            available: false
        },
        {
            day: 2,
            from: null,
            to: null,
            available: false
        },
        {
            day: 3,
            from: null,
            to: null,
            available: false
        },
        {
            day: 4,
            from: null,
            to: null,
            available: false
        },
        {
            day: 5,
            from: null,
            to: null,
            available: false
        },
        {
            day: 6,
            from: null,
            to: null,
            available: false
        }
    ];

    export const STUDENT: StudentWithoutId = {
        name: "",
        phone: "",
        email: "",
        availability: AVAILABILITY
    };
}

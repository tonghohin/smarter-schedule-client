import configuration from "@/configuration.json";
import Availability from "@/interfaces/Availability";
import User from "@/interfaces/User";
import SignUpFormData from "@/interfaces/helpers/SignUpFormData";
import { InitialStates } from "@/utilities/InitialStates";

export namespace UserApi {
    export async function read(uid: string): Promise<User> {
        const res = await fetch(`${configuration.backend}/users/${uid}`);
        const user = await res.json();
        return user;
    }

    export async function create(uid: string, userInfo: SignUpFormData): Promise<User | undefined> {
        const data = {
            uid: uid,
            name: userInfo.name,
            phone: userInfo.phone
        };
        try {
            const res = await fetch(`${configuration.backend}/users`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const createdUser = await res.json();
            if (createdUser.error) throw new Error(createdUser.error);
            return createdUser;
        } catch (error) {
            console.error("error", error);
            if (error instanceof Error) {
                throw error.message;
            }
        }
    }

    export async function readSchedule(uid: string): Promise<Availability[]> {
        try {
            const res = await fetch(`${configuration.backend}/availability/${uid}`, { cache: "no-cache" });
            const availability = await res.json();
            if (availability.error) throw new Error(availability.error);
            return availability;
        } catch (error) {
            console.error("error", error);
            if (error instanceof Error) {
                throw error.message;
            }
            return InitialStates.AVAILABILITY;
        }
    }

    export async function updateSchedule(schedule: Availability[]) {
        try {
            const res = await fetch(`${configuration.backend}/availability`, {
                method: "POST",
                body: JSON.stringify(schedule),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const updatedSchedule = await res.json();
            if (updatedSchedule.error) throw new Error(updatedSchedule.error);
            return updatedSchedule;
        } catch (error) {
            console.error("error", error);
            if (error instanceof Error) {
                throw error.message;
            }
        }
    }
}

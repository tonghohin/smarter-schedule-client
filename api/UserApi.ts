import configuration from "@/configuration.json";
import User from "@/interfaces/User";
import SignUpFormData from "@/interfaces/helpers/SignUpFormData";

export namespace UserApi {
    export async function readUser(uid: string): Promise<User> {
        const res = await fetch(`${configuration.backend}/users/${uid}`, { cache: "no-cache" });
        const user = await res.json();
        return user;
    }

    export async function createUser(uid: string, userInfo: SignUpFormData): Promise<User | undefined> {
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

    export async function updateUser(user: User): Promise<User | undefined> {
        try {
            const res = await fetch(`${configuration.backend}/users`, {
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const updatedUser = await res.json();
            if (updatedUser.error) throw new Error(updatedUser.error);
            return updatedUser;
        } catch (error) {
            console.error("error", error);
            if (error instanceof Error) {
                throw error.message;
            }
        }
    }
}

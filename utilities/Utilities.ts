import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction } from "react";

export namespace Utilities {
    export function handleFormInputChange<T>(setState: Dispatch<SetStateAction<T>>, e?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined {
        const key = e?.target.name || "";
        const value = e?.target.value || "";
        setState((prevState) => {
            return { ...prevState, [key]: value };
        });
        return;
    }
}

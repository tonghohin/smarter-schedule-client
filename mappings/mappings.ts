export namespace Mapping {
    export const DayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    export const TrueFalse = (boolean: boolean) => {
        return boolean ? "Yes" : "No";
    };
}

export default interface Availability {
    id?: number;
    day: number;
    from: string | null;
    to: string | null;
    available: boolean;
}

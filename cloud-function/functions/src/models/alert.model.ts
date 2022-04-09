export interface Alert {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
    tags: string[];
}

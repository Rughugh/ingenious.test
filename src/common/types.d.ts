interface IStopData {
    line: number;
    stop: string;
    order: number;
    time: string;
}

interface ILineDetails {
    line: number;
    stops: string[];
}
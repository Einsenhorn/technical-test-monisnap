export enum Gender {
    Female = 1,
    Male = 2,
}

export interface Recipient {
    id: number;
    gender: Gender;
    firstname: string;
    lastname: string;
}

export enum TransferStatus {
    Error = 0,
    Success = 1,
}

export interface Transfer {
    id: number;
    country: string;
    amount: number;
    recipient: Recipient;
    status: TransferStatus;
    date: Date;
}

export enum GenderType {
    Female = 1,
    Male = 2,
}

export interface RecipientType {
    id: number;
    gender: GenderType;
    firstname: string;
    lastname: string;
}

export enum TransferStatusType {
    Error = 0,
    Success = 1,
}

export interface TransferType {
    id: number;
    country: string;
    amount: number;
    recipient: RecipientType;
    status: TransferStatusType;
    date: Date;
}

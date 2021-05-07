import React from "react";
import {
    Gender,
    Recipient,
    Transfer as TransferType,
    TransferStatus,
} from "../common/types";

import Transfer from "./Transfer";

const createRecipient = (
    firstname: string,
    lastname: string,
    gender: Gender
): Recipient => ({
    id: 1,
    firstname,
    lastname,
    gender,
});

const createTransfer = (
    recipient: Recipient,
    country: string,
    amount: number,
    date: Date = new Date(),
    status: TransferStatus = TransferStatus.Success
): TransferType => {
    return {
        id: 1,
        country,
        amount,
        recipient,
        status,
        date,
    };
};

export const TransferJohnDoe: React.FC = () => {
    const transfer = createTransfer(
        createRecipient("John", "Doe", Gender.Male),
        "SN",
        42
    );

    return (
        <div>
            <Transfer transfer={transfer} />
        </div>
    );
};

export const TransferLeiaOrgana: React.FC = () => {
    const date = new Date();

    date.setFullYear(40000);
    const transfer = createTransfer(
        createRecipient("Leia", "Organa", Gender.Female),
        "MA",
        2430432.42,
        date,
        TransferStatus.Error
    );

    return (
        <div>
            <Transfer transfer={transfer} />
        </div>
    );
};

export default {
    title: "Organisms/Transfer",
    component: Transfer,
};

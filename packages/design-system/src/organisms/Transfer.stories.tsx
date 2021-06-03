import React from "react";
import {
    GenderType,
    RecipientType,
    TransferType,
    TransferStatusType,
} from "../common";

import Transfer from "./Transfer";

const createRecipient = (
    firstname: string,
    lastname: string,
    gender: GenderType
): RecipientType => ({
    id: 1,
    firstname,
    lastname,
    gender,
});

const createTransfer = (
    recipient: RecipientType,
    country: string,
    amount: number,
    date: Date = new Date(),
    status: TransferStatusType = TransferStatusType.Success
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
        createRecipient("John", "Doe", GenderType.Male),
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
        createRecipient("Leia", "Organa", GenderType.Female),
        "MA",
        2430432.42,
        date,
        TransferStatusType.Error
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

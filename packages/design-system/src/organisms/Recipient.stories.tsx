import React from "react";
import { Gender, Recipient as RecipientType } from "../common/types";
import Recipient, { RecipientProperties } from "./Recipient";

const createRecipient = (
    firstname: string,
    lastname: string,
    gender: Gender
): RecipientType => ({
    id: 1,
    firstname,
    lastname,
    gender,
});

const createRecipientSummary = (
    recipient: RecipientType,
    country: string,
    amount: number,
    numberOfTransfer: number
): RecipientProperties => ({
    recipient,
    country,
    amount,
    numberOfTransfer,
    displayAsCard: false,
});

const johnDoeRecipientSummary = createRecipientSummary(
    createRecipient("John", "Doe", Gender.Male),
    "SN",
    42,
    2
);

const leiaOrganaRecipientSummary = createRecipientSummary(
    createRecipient("Leia", "Organa", Gender.Female),
    "FRANCE",
    77,
    1
);

export const RecipientJohnDoe: React.FC = () => (
    <div>
        <Recipient {...johnDoeRecipientSummary} />
    </div>
);

export const RecipientLeiaOrgana: React.FC = () => (
    <div>
        <Recipient {...leiaOrganaRecipientSummary} />
    </div>
);

export const DisplayRecipientsAsAList: React.FC = () => (
    <div>
        <Recipient {...johnDoeRecipientSummary} />
        <Recipient {...leiaOrganaRecipientSummary} />
    </div>
);

export const DisplayRecipientsAsCards: React.FC = () => (
    <div>
        <Recipient {...johnDoeRecipientSummary} displayAsCard />
        <Recipient {...leiaOrganaRecipientSummary} displayAsCard />
    </div>
);

export default {
    title: "Organisms/Recipient",
    component: Recipient,
};

import React from "react";
import styled from "styled-components";

import { Button, RecipientName } from "../atoms";
import { RecipientType } from "../common";
import { Avatar } from "../molecules";
import { amountFormat } from "../common/AmountFormat";

export interface RecipientPropertiesType {
    recipient: RecipientType;
    amount: number;
    country: string;
    numberOfTransfer: number;
    displayAsCard: boolean;
}

const RecipientWrapper = styled.article<{ card: boolean }>`
    background: #f4f4f4;
    border-radius: 10px;
    padding: 2px;
    margin: 10px;
    ${({ card }) => (card ? "display: inline-block;" : "")};
`;

const ElementsWrapper = styled.div<{ card: boolean }>`
    display: flex;
    align-items: center;
    ${({ card }) => (card ? "flex-direction: column;" : "")};
`;

const ElementWrapper = styled.span<{
    float?: "right" | "left" | "none";
    flex?: number | "auto" | "none";
    textAlign?: "left" | "right";
}>`
    flex: ${({ flex }) =>
        typeof flex === "number" || flex === "auto" ? flex : "none"};
    ${({ textAlign }) =>
        typeof textAlign !== "undefined" ? `text-align: ${textAlign}` : ""};
    padding: 10px;
`;

const Recipient: React.FC<RecipientPropertiesType> = (
    props: RecipientPropertiesType
) => {
    const {
        recipient,
        amount,
        country,
        numberOfTransfer,
        displayAsCard,
    } = props;

    return (
        <RecipientWrapper card={displayAsCard}>
            <ElementsWrapper card={displayAsCard}>
                <ElementWrapper>
                    <Avatar gender={recipient.gender} country={country} />
                </ElementWrapper>
                <ElementWrapper flex={1}>
                    <RecipientName {...recipient} />
                    {numberOfTransfer} transfert
                    {numberOfTransfer > 1 ? "s" : ""}
                </ElementWrapper>
                <ElementWrapper flex="auto">
                    <Button
                        primary
                        label={`Envoyer ${amountFormat(amount)}`}
                        width="100%"
                    />
                </ElementWrapper>
            </ElementsWrapper>
        </RecipientWrapper>
    );
};

export default Recipient;

import React from "react";
import styled from "styled-components";

import { Amount, Button, RecipientName } from "../atoms";
import { TransferType, TransferStatusType } from "../common";
import { Avatar } from "../molecules";

export interface TransferPropertiesType {
    transfer: TransferType;
}

const TransferWrapper = styled.article`
    background: #f4f4f4;
    border-radius: 10px;
    padding: 2px;
    margin: 10px;
`;

const ElementsWrapper = styled.div`
    display: flex;
    align-items: center;
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

const Transfer: React.FC<TransferPropertiesType> = (
    props: TransferPropertiesType
) => {
    const { country, amount, recipient, status, date } = props.transfer;

    return (
        <TransferWrapper>
            <ElementsWrapper>
                <ElementWrapper>
                    <Avatar gender={recipient.gender} country={country} />
                </ElementWrapper>
                <ElementWrapper flex={1}>
                    <RecipientName {...recipient} />
                    <Amount amount={amount} />
                </ElementWrapper>
                <ElementWrapper flex={1} textAlign={"right"}>
                    <div>
                        {status === TransferStatusType.Success
                            ? "Recu"
                            : "Non recu"}
                    </div>
                    <div>{date.toString()}</div>
                </ElementWrapper>
            </ElementsWrapper>
            <ElementsWrapper>
                <ElementWrapper flex="auto">
                    <Button primary label="Refaire l'envoi" width="100%" />
                </ElementWrapper>
            </ElementsWrapper>
        </TransferWrapper>
    );
};

export default Transfer;

import React from "react";
import styled from "styled-components";

import { amountFormat } from "../common/AmountFormat";

export interface AmountPropertiesType {
    amount: number;
}

const AmountWrapper = styled.span`
    color: #0a090a;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
`;

export const Amount: React.FC<AmountPropertiesType> = (
    props: AmountPropertiesType
) => <AmountWrapper>{amountFormat(props.amount, true)}</AmountWrapper>;

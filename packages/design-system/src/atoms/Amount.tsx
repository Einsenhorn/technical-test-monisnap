import React from "react";
import styled from "styled-components";

import { format } from "../common/amount";

export interface AmountProperties {
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

export const Amount: React.FC<AmountProperties> = (props: AmountProperties) => (
    <AmountWrapper>{format(props.amount, true)}</AmountWrapper>
);

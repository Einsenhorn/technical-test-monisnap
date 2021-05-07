import React from "react";
import styled from "styled-components";

import { RecipientType } from "../common";

const RecipientNameWrapper = styled.div`
    color: #0a090a;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
`;

export const RecipientName: React.FC<RecipientType> = (
    props: RecipientType
) => {
    let name = props.firstname;

    if (typeof props.lastname === "string" && props.lastname.length > 0) {
        name += " " + props.lastname;
    }

    return <RecipientNameWrapper>{name}</RecipientNameWrapper>;
};

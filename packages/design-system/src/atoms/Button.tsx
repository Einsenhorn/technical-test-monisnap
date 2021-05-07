import React from "react";
import styled from "styled-components";

export interface ButtonProperties {
    label: string;
    primary?: boolean;
    width?: string;
}

const ButtonComponent = styled.button<{ primary: boolean; width: string }>`
    background-color: ${({ primary }) => (primary ? "#39CF71" : "#6666FF")};
    border-radius: 5px;
    border: none;
    padding: 5px 10px 0 10px;
    ${({ width }) => (typeof width !== "undefined" ? `width: ${width}` : "")}
`;

const ButtonLabel = styled.span`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;

    text-align: center;
    color: #ffffff;
`;

export const Button: React.FC<ButtonProperties> = (props: ButtonProperties) => (
    <ButtonComponent primary={!!props.primary} width={props.width}>
        <ButtonLabel>{props.label}</ButtonLabel>
    </ButtonComponent>
);

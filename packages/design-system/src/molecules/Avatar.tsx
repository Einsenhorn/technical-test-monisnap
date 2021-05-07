import React from "react";
import styled from "styled-components";

import { Flag } from "../atoms";
import { GenderType } from "../common";

import Female from "@assets/avatar/female.svg";
import Male from "@assets/avatar/male.svg";

export interface AvatarPropertiesType {
    gender: GenderType;
    country: string;
}

const AvatarWrapper = styled.span`
    position: relative;
    display: inline-block;
`;

const FlagWrapper = styled.span`
    position: absolute;
    top: 0px;
    right: 0px;
`;

export const Avatar: React.FC<AvatarPropertiesType> = (
    props: AvatarPropertiesType
) => {
    return (
        <AvatarWrapper>
            <img src={props.gender === GenderType.Female ? Female : Male} />
            <FlagWrapper>
                <Flag country={props.country} />
            </FlagWrapper>
        </AvatarWrapper>
    );
};

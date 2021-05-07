import React from "react";
import styled from "styled-components";

import { Flag } from "../atoms";
import { Gender } from "../common/types";

import Female from "../../assets/avatar/female.svg";
import Male from "../../assets/avatar/male.svg";

export interface AvatarProperties {
    gender: Gender;
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

export const Avatar: React.FC<AvatarProperties> = (props: AvatarProperties) => {
    return (
        <AvatarWrapper>
            <img src={props.gender === Gender.Female ? Female : Male} />
            <FlagWrapper>
                <Flag country={props.country} />
            </FlagWrapper>
        </AvatarWrapper>
    );
};

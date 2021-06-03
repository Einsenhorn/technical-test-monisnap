import React from "react";
import styled from "styled-components";

import MA from "@assets/flag/MA.svg";
import SN from "@assets/flag/SN.svg";
import PlaceholderImage from "@assets/flag/Placeholder.svg";

const countryList: Record<string, string> = {
    MA,
    SN,
};

const getCountryImage = (isoCode: string): string => {
    const image = countryList[isoCode];
    return typeof image !== "undefined" ? image : PlaceholderImage;
};

export interface FlagPropertiesType {
    country: string;
}

const Image = styled.img`
    border-radius: 50%;
`;

export const Flag: React.FC<FlagPropertiesType> = (
    props: FlagPropertiesType
) => <Image src={getCountryImage(props.country)} />;

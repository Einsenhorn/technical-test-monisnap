import React from "react";

export interface IconPropertiesType {
    type: string;
}

export const Icon: React.FC<IconPropertiesType> = (
    props: IconPropertiesType
) => <span className="material-icons">{props.type}</span>;

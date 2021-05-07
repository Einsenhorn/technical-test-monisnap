import React from "react";

export interface IconProperties {
    type: string;
}

export const Icon: React.FC<IconProperties> = (props: IconProperties) => (
    <span className="material-icons">{props.type}</span>
);

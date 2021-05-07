import React from "react";

import { Flag } from "./Flag";

export const ListOfAllFlags: React.FC = () => {
    return (
        <div>
            <Flag country={"MA"} />
            <Flag country={"SN"} />
        </div>
    );
};

export const UnknownFlag: React.FC = () => {
    return (
        <div>
            <Flag country={"42"} />
        </div>
    );
};

export default {
    title: "Atoms/Flag",
    component: Flag,
};

import React from "react";

import { Avatar } from "./Avatar";
import { GenderType } from "../common";

export const AvatarFemale: React.FC = () => (
    <Avatar gender={GenderType.Female} country={"SN"} />
);

export const AvatarMale: React.FC = () => (
    <Avatar gender={GenderType.Male} country={"MC"} />
);

export default {
    title: "Molecules/Avatar",
    component: Avatar,
};

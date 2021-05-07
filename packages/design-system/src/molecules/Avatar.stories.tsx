import React from "react";

import { Avatar } from "./Avatar";
import { Gender } from "../common/types";

export const AvatarFemale: React.FC = () => (
    <Avatar gender={Gender.Female} country={"SN"} />
);

export const AvatarMale: React.FC = () => (
    <Avatar gender={Gender.Male} country={"MC"} />
);

export default {
    title: "Molecules/Avatar",
    component: Avatar,
};

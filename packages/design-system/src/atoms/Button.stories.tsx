import React from "react";

import { Button } from "./Button";

export const ButtonPrimary: React.FC = () => {
    return <Button primary label="Refaire l'envoi" />;
};

export const ButtonSecondary: React.FC = () => {
    return <Button label="Refaire l'envoi" />;
};

export default {
    title: "Atoms/Button",
    component: Button,
};

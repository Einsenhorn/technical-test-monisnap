import React from "react";

import { Amount } from "./Amount";

export const AmountTest1: React.FC = () => {
    return <Amount amount={42} />;
};

export const AmountTest2: React.FC = () => {
    return <Amount amount={42.2} />;
};

export const AmountTest3: React.FC = () => {
    return <Amount amount={-42.21832434} />;
};

export const AmountTest4: React.FC = () => {
    return <Amount amount={1666333999} />;
};

export default {
    title: "Atoms/Amount",
    component: Amount,
};

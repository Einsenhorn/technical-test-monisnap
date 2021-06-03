import React from "react";
import ReactDOM from "react-dom";

import { Avatar, GenderType } from "@monisnap/design-system";

ReactDOM.render(
    <Avatar gender={GenderType.Female} country={"SN"} />,
    document.getElementById("hello-example")
);

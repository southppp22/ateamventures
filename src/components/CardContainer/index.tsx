import React from "react";
import { Card } from "components";
import { Request } from "types/Data";

function CardContainer(props: Request) {
  return <Card {...props} />;
}

export default CardContainer;

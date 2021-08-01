import React from "react";
import { useParams } from "react-router-dom";
import FormValid from "../Components/FormValid";

function SmallComp() {
  const { compID } = useParams();
  return <div>{compID === "FormValid" && <FormValid />}</div>;
}

export default SmallComp;

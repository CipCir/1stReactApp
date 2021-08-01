import React from "react";
import { Redirect } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
}

export default NotFound;

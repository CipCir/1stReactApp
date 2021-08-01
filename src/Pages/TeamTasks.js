import React from "react";
import InfoTasks from "../Components/TeamTasks/InfoTasks";
import LayoutTasks from "../Components/TeamTasks/LayoutTasks";
import AddTasks from "../Components/TeamTasks/AddTasks";

function TeamTasks() {
  return (
    <div>
      <InfoTasks />
      <LayoutTasks />
      <AddTasks />
    </div>
  );
}

export default TeamTasks;

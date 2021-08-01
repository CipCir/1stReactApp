import style from "./TaskCard.module.css";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { FaStepBackward, FaCheckCircle } from "react-icons/fa";
const Statuses = ["Bck", "Dev", "Tst", "Done"];

function TaskCard(props) {
  const [statusIndx, setStatusIndx] = useState(0);
  const moveNext = () => {
    // let curIndx = Statuses.indexOf(props.tsk.task_status);
    db.ref("tsk/" + props.tsk.id).update({ tStatus: Statuses[statusIndx + 1] });
  };
  const movePrev = () => {
    // let curIndx = Statuses.indexOf(props.tsk.task_status);
    db.ref("tsk/" + props.tsk.id).update({ tStatus: Statuses[statusIndx - 1] });
  };
  useEffect(() => {
    setStatusIndx(Statuses.indexOf(props.tsk.task_status));
  }, [props.tsk.task_status]);
  return (
    <div className={[style.card, "tCard"].join(" ")}>
      <div className={style.cardTitle}>{props.tsk.task_name}</div>
      <div className={style.cardFooter}>
        {statusIndx > 0 && (
          <div
            onClick={movePrev}
            className={[style.actionBtn, style.movePrev].join(" ")}
          >
            <FaStepBackward />
          </div>
        )}
        {statusIndx < Statuses.length - 1 && (
          <div
            onClick={moveNext}
            className={[style.actionBtn, style.moveNext].join(" ")}
          >
            <FaCheckCircle />
          </div>
        )}
      </div>
      <div
        className={[style.statusBar, style[props.tsk.task_status]].join(" ")}
      ></div>
    </div>
  );
}

export default TaskCard;

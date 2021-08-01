import React, { useState, useEffect } from "react";
import style from "./LayoutTasks.module.css";
import TaskCard from "./TaskCard";
import { db } from "../../firebase";

function LayoutTasks() {
  const [bckTsk, setBckTsk] = useState([]);
  const [devTsk, setDevTsk] = useState([]);
  const [tstTsk, setTstTsk] = useState([]);
  const [doneTsk, setDoneTsk] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);
  const fetchTasks = async () => {
    db.ref("tsk").on("value", (querySnapshot) => {
      const queryOBJ = querySnapshot.val();
      const tasksArr = [];
      // debugger;
      for (var prop in queryOBJ) {
        tasksArr.push({
          id: prop,
          task_name: queryOBJ[prop].tName,
          task_status: queryOBJ[prop].tStatus,
        });
      }
      setBckTsk(
        tasksArr.filter((tsk) => {
          return tsk.task_status === "Bck";
        })
      );
      setDevTsk(
        tasksArr.filter((tsk) => {
          return tsk.task_status === "Dev";
        })
      );
      setTstTsk(
        tasksArr.filter((tsk) => {
          return tsk.task_status === "Tst";
        })
      );
      setDoneTsk(
        tasksArr.filter((tsk) => {
          return tsk.task_status === "Done";
        })
      );
    });
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.columnContainer}>
        <div className={style.columnHeader}>Backlog</div>
        {bckTsk.map((tsk) => {
          return <TaskCard tsk={tsk} key={tsk.id} />;
        })}
      </div>
      <div className={style.columnContainer} id={style.dev}>
        <div className={style.columnHeader}>Developing</div>
        {devTsk.map((tsk) => {
          return <TaskCard tsk={tsk} key={tsk.id} />;
        })}
      </div>
      <div className={style.columnContainer}>
        <div className={style.columnHeader}>Testing</div>
        {tstTsk.map((tsk) => {
          return <TaskCard tsk={tsk} key={tsk.id} />;
        })}
      </div>
      <div className={style.columnContainer}>
        <div className={style.columnHeader}>Done</div>
        {doneTsk.map((tsk) => {
          return <TaskCard tsk={tsk} key={tsk.id} />;
        })}
      </div>
    </div>
  );
}

export default LayoutTasks;

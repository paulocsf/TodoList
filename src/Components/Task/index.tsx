import styles from "./task.module.css";
import {TbTrash} from 'react-icons/tb';
import { ITask } from "../../App";
import {BsFillCheckCircleFill} from "react-icons/bs";

interface Props{
  task: ITask;
  onDelete : (taskID: string) => void;
  onComplete: (taskID : string) => void;

}

export function Task( {task, onDelete, onComplete}: Props){


  return(
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick= {() => onComplete(task.Id)} >
        {task.isCompleted ? <BsFillCheckCircleFill/> : <div/>}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.Id)}>
        <TbTrash size={20}/>
        </button>
    </div>
  )
}
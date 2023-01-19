import styles from "./tasks.module.css";
import {Task} from "../Task/index"
import {ITask} from "../../App"
import { TbClipboardText } from "react-icons/tb";

interface Props{
  tasks: ITask[];
  onDelete: (taskID : string) => void;
  onComplete: (taskID : string) => void;

}

export function Tasks({tasks,onDelete,onComplete}: Props){
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  
  return(
  <section className={styles.tasks}>
    <header className={styles.header}>
      <div>
        <p>Tarefas Criadas</p>
        <span>{tasksQuantity}</span>
      </div>
      <div>
        <p className={styles.textPurple}>Concluidas</p>
        <span>{completedTasks} de {tasksQuantity}</span>
      </div>
    </header>
    <div className={styles.list}>
      {tasks.map((task) => (
              <Task key={task.Id} task={task} onDelete={onDelete} onComplete={onComplete}/>
      ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50}/>
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>
                crie tarefas e organize seus itens
              </span>
            </div>
          </section>
        ) }
    </div>
  </section>
  )
}
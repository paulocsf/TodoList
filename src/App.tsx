import {useState, useEffect} from 'react';
import { Header } from "./Components/Header/index"
import { Tasks } from "./Components/Tasks/index"

const LOCAL_STORAGE_KEY = "todo:savedTasks"

export interface ITask{
  Id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function loadSavedTasks(){
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved){
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {loadSavedTasks()},[])
  

  function setTasksandSave(newTasks : ITask[]){
      setTasks(newTasks);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
function addTask(taskTitle : string){
  setTasksandSave([
    ...tasks,
    {
      Id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
    }
  ])
}

function deleteTaskbyId(taskId : string){
  const newTasks = tasks.filter(task => task.Id != taskId  )
  setTasksandSave(newTasks);
}

function toggleTaskCompletedbyID(taskId: string){
  const newTasks = tasks.map(task => {
    if(task.Id === taskId){
      return{
        ...task,
        isCompleted: !task.isCompleted
      }
    }
    return task;

  });
  setTasksandSave(newTasks);
}

  return (
      <>
        <Header onAddTask={addTask}/>
        <Tasks tasks={tasks} onDelete={deleteTaskbyId} onComplete={toggleTaskCompletedbyID}/>
        
      </>
  )
}

export default App

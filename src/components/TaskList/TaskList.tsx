import styles from "./TaskList.module.css";

// Interface
import type { ITask } from "../../interfaces/task";

interface TaskListProps {
  taskList: ITask[];
}

export function TaskList({ taskList }: TaskListProps) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
}

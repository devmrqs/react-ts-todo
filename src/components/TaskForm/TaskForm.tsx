import { useState, type ChangeEvent, type SyntheticEvent } from "react";

// CSS
import styles from "./TaskForm.module.css";

// Interface
import type { ITask } from "../../interfaces/task";

interface TaskFormProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

export function TaskForm({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: TaskFormProps) {
  // Estados iniciais da tarefa
  const id = task?.id ?? 0;
  const [title, setTitle] = useState<string>(task?.title ?? "");
  const [difficulty, setDifficulty] = useState<number>(task?.difficulty ?? 0);

  const addTaskHandle = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandle} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}

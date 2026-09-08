import styles from "./TaskForm.module.css";

interface TaskFormProps {
  btnText: string;
}

export function TaskForm({ btnText }: TaskFormProps) {
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Titulo:</label>
        <input type="text" name="title" placeholder="Título da tarefa" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}

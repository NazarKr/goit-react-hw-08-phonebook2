import Task from "components/Task/Task";
import { useSelector } from "react-redux";
import { selectVisibleTasks } from 'redux/tasks/selectors';
import css from "./TaskList.module.css";

const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
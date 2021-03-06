import AddButton from '../components/AddButton';
import { useState, useEffect } from 'react';
import {
  Link,
    useParams
} from "react-router-dom";
import Board from "../components/Board";
const mockedTasks = [
  {
    id: 'id',
    title: 'title',
    difficulty: '1',
    type: 'Exam',
    status: 'TODO',
  },
  {
    id: 'id1',
    title: 'title1',
    difficulty: '3',
    type: 'Exam',
    status: 'IN_PROGRESS',
  },
  {
    id: 'id2',
    title: 'title2',
    difficulty: '3',
    type: 'Exam',
    status: 'DONE',
  },
];

const TaskByID = ({ modalToggler }) => {
  const { taskID } = useParams();
  const [parentTaskTitle, setParentTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const updateTasks = (newTasks, changedIdx) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTasks[changedIdx])
    };
    fetch(`http://3.21.207.104:8080/tasks/${taskID}/subtasks/${newTasks[changedIdx].id}`, requestOptions)
    setTasks(newTasks)
  }
  useEffect(() => {
    fetch(`http://3.21.207.104:8080/tasks/${taskID}`)
        .then(res => res.json())
        .then(
            (result) => {
              setParentTaskTitle(result.title);
            }
        )
  }, []);

  useEffect(() => {
    fetch(`http://3.21.207.104:8080/tasks/${taskID}/subtasks`)
        .then(res => res.json())
        .then(
            (result) => {
              setTasks(result.data);
            }
        )
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        width: '100%',
        padding: '20px',
      }}
    >
      <AddButton onClick={modalToggler} text="Create a Subtask" />
      <div>
        <span style={{
          'font-size': '25px',
          marginRight: '20px'
          }}>
          {parentTaskTitle}
        </span>
        <Link
          to='/tasks'
        >
          Back
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          border: '3px solid #44A9FB',
          height: '600px',
        }}
      >
        <Board tasks={tasks}  onElementDropped={updateTasks}/>
      </div>
    </div>
  );
};

export default TaskByID;

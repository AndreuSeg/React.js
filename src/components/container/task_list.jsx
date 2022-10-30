import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {
    
    const defaultTask1 = new Task("Example-1", "Example-1", true, LEVELS.NORMAL)
    const defaultTask2 = new Task("Example-2", "Example-2", false, LEVELS.URGENT)
    const defaultTask3 = new Task("Example-3", "Example-3", true, LEVELS.BLOCKING)

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida
    useEffect(() => {
        console.log("Task state has been modified");
        setLoading(false)
        return () => {
            console.log("TaskList component is going to unmount");
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log("TODO: Cambiar estado de una tarea");
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header */}
                    <div className='card-header p-3'>
                        <h3 className='taskTittle'>Your tasks</h3>
                    </div>
                    {/* Card body */}
                        {/* data-mdb-perfect-scrollbar='true' sirve para poner scroll si se hace la 
                        pantalla muy grande */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '300px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Tittle</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Ahora iteraremos todas las tareas. */}
                                { tasks.map((task, index) => {
                                    return (<TaskComponent key={index} task={task}></TaskComponent>)
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
        </div>
    );
};


export default TaskListComponent;

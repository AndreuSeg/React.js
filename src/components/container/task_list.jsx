import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL)

    /* changeState (id) => {
        console.log("TODO: Cambiar estado de una tarea")
    } */

    return (
        <div>
            <h1>Your task: </h1>
            {/* TODO: Aplicar un FOR/MAP para renderizar la lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;

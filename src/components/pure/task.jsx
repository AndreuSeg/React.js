import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import '../../styles/task.scss';


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log("Created task")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    // Funcion para devolver una badge dependiendo de la prioridad
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }

    // Funcion que devuelve los iconos segun si la tarea esta completada o no 
    function taskCompletedIcon() {
        if (task.completed) {
            return <i class='bi bi-toggle-on' style={ {color: 'green'} }></i>
        }
        else {
            return <i class='bi bi-toggle-off' style={ {color: 'grey'} }></i>
        }
    }

    return (
        <tr className='fw-normal'>
            <td>
                <span className='ms-2'>{ task.name }</span>
            </td>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                <i class='bi bi-trash' style={ {color: 'tomato', fontSize: 'large'} }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;

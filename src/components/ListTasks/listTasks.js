import React from 'react';
import './ListTasks.css'
import Task from '../Task/Task';
import List from '@material-ui/core/List';


const ListTasks = ({ tasks }) => {
    return (
        <List>
            {
                tasks.map((task, index) => (
                    <Task key={index + 1} task={task} />
                ))
            }
        </List>
    );
}

export default ListTasks;
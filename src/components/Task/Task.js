import './Task.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Task = ({task})=> {
    return (
     <aritcle>
         <h1>{task.id}</h1>
         <h2>{task.title}</h2>
         <p>{task.description}</p>
     </aritcle>
    );
  }
  
export default Task;
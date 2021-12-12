import { useState } from "react";
const PaneResults= ({
    operator,
    operatorsList,
    calculation
})=> {
    const [rightOperand, setRightOperand] = useState('');
    const [leftOperand, setLeftOperand] = useState('');

    const handleChange =((e) =>{
        var paneText = e.target.value;
        if (paneText == ''){
         
        }
     

        
    }
    return (
     <div class='pane-results'>
        <input class='pane-results-text'
            type='text'
            onChange={}
        />
     </div>
    );
  }
  
export default Task;
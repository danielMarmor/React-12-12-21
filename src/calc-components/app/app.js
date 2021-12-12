import React from "react";
import { useState, useEffect } from "react";

const App = ()=> {
    const [leftOperand, setLeftOperand] = useState('');
    const [rightOperand, setLeftOperand] = useState('');
    const [operator ,setOperator] = useState('');

    const OPERATORS = ['+', '-', '*', '/']

    return (
            <div class='calc-cont'>
                <PaneHeader/>
                <div class='calc-pane-sperator'></div>
                <PaneResults leftOperand={leftOperand} setLeftOperand={setLeftOperand}
                rightOperand={rightOperand} setRightOperand={setRightOperand}
                operator={operator}
                operators={OPERATORS}
                />
                <PaneButtons operator={operator} setOperator={setOperator}/>
            </div>
    );
  }
  
export default Task;
import {Actions} from "./App"
function DigitButton({dispatch,digit}) {
 return <button onClick={()=>dispatch({type:Actions.ADD_DIGIT,payload:{digit}})}>
    {digit}</button>

    
}

export default DigitButton;
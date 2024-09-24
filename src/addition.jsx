

import { Button } from 'react-bootstrap';
import './css/style.css'

//hook useState()
import {useState} from 'react';
function Addition(){
    const[num1,setNum1] = useState(0)
    const[num2,setNum2] = useState(0)
    return(
        <>
        <div className='form'>
        <br/>
        <h1 className='bg-primary'>Addition</h1>
        <div className='input'>
        <input type="text" name="num1" className="num1"
        onChange={
            (e)=>{
                setNum1(e.target.value)
            }
        }/>
        {num1}
    

        <input type="text" name="num2" className="num2"
        onChange={
            (e)=>{
                setNum2(e.target.value)
            }
        }/>
        {num2}
        </div>

<br/>
        <Button
        variant='danger'
         className='btn' 
         onClick={()=>{
            let sum;
            sum=Number(num1)+Number(num2)
            alert(sum)
        }}>Add
        </Button>
        </div>

        </>
    )
}

export default Addition;
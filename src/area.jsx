

import {useState} from 'react';
import {Button} from 'react-bootstrap';

function Area(){
    const[radius,area]=useState(0)
    return(
        <>
        <div className='circle'>
        <input type='number' placeholder='enter the radius'
        onChange={(e)=>{
            area(e.target.value)
        }}/>

        <Button
        onClick={()=>{
            area=3.14*Number(radius)*Number(radius);
            alert(`Area of a circle with radius ${radius}=${area}`)
        }}>Find Area</Button>
        </div>
        </>
    )
}

export default Area;
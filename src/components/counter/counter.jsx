import { useState } from 'react'
import Button from '../ui/'
import Greeting from '../greeting'



function Counter(props) {
    const [count, setCount] = useState(0);
    
    const resetCounter = () => {
      setCount(0);
    };

    const setCounter = (num) => {
      setCount(count + num);
    }
    
    const showGreeting = count < 15 && count > -15;
  
    return (
      <div className="row counter-container">
        {showGreeting ? (<Greeting title="Counter" description={count} />) : ''}
        <div className="col-12 d-flex">
          <Button type='button' className='btn btn-danger' onClick={() => setCounter(-100)} text='-100'/> 
        </div>
        <div className="col-12">
          <Button type='button' className='btn btn-warning' onClick={() => setCounter(-5)} text='-5'/> 
        </div>
        <div className="col-12">
          <Button type='button' className='btn btn-primary' onClick={() => setCounter(-1)} text='-1'/> 
        </div>
        <div className="col-12">
          <Button type='button' className='btn btn-secondary' onClick={resetCounter} text='Reset counter'/> 
        </div>
        <div className="col-12">
          <Button type='button' className='btn btn-primary' onClick={() => setCounter(+1)} text='+1'/>  
        </div>
        <div className="col-12">
          <Button type='button' className='btn btn-warning' onClick={() => setCounter(+5)} text='+5'/>  
        </div>
        <div className="col-12">
          <Button type='button' className='btn btn-danger' onClick={() => setCounter(+100)} text='+100'/>  
        </div>
      </div>
    );
}

export default Counter;
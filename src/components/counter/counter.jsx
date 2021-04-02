import { useState } from 'react'
import Button from '../ui/'
import Greeting from '../greeting'
import Theme from '../theme'


function Counter(props) {
    const [count, setCount] = useState(0);
    
    const resetCounter = () => {
      setCount(0);
    };

    const setCounter = (num) => {
      setCount(count + num);
    }
    
    return (
      <div className="row counter-container">
        <Theme color='red' text={count}/>
        <div className="col-12">
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
        <Greeting title="Counter" description={count} />
      </div>
    );
}

export default Counter;
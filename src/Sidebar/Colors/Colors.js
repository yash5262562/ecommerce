import React from 'react'
import './Colors.css'
import Input from '../../components/Input';

 function Colors({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
      <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test2' />
          <span className='checkmark all'></span>All
        </label>   

        <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test2"
        color="black"
        
        />   

<Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test2"
        color="blue"
        
        />   

<Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test2"
        color="red"
        
        />   

<Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test2"
        color="green"
        
        />

        <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="test2"
        color="white"
        
        /> 
        
    </div>
  )
}
export default Colors;
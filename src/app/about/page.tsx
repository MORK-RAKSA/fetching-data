'use client'
import React from 'react'
import Button from '../components/atoms/Button';

  const handleClick = () => {
    alert('Button clicked');
  };

const page = () => {
  return (
    <div>
      <div>this is a f*cking about page mother father!!!!!!</div>
      <Button label='Mork Raksa' color='me' onClick={handleClick} text='2xl'/>
    </div>
  )
}
export default page;

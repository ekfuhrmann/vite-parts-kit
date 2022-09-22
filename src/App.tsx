import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { AddIcon, CloseIcon } from './components/Icons';
import { Button } from './components/Button';

function App() {
  return (
    <>
      <AddIcon classes='rect-80' />
      <div className='flex items-center space-x-16 mt-32'>
        <Button startIcon={<AddIcon />}>Label</Button>
        <Button variant='outlined' endIcon={<CloseIcon />}>
          Label
        </Button>
      </div>
    </>
  );
}

export default App;

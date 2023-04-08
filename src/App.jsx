import React from 'react';
import { TaskList } from './components/TaskList';
import { FormTask } from './components/FormTask'; 

function App() {

  return (
    <div className='bg-zinc-200 flex flex-wrap justify-center place-items-center mx-auto'>
      <FormTask />
      <TaskList />
    </div>
  )
}

export default App


import './App.css'
import { useLoaderData } from 'react-router-dom'
import TeaCard from './TeaCard'
import { useState } from 'react';

function App() {
  const loadedTea = useLoaderData();
  const [teas, setTeas]=useState(loadedTea)
  

  return (
    <>
      
      <h1 className='text-4xl text-red-900'>ALL TEST TEA HERES {loadedTea.length}</h1>
      <p className='text-red-500'>use this goto other rut:(/addedtea)</p>
      <div className='grid grid-cols-2 gap-8'>
        {
          teas.map(tea =><TeaCard key={tea._id} tea={tea}
            teas={teas}
            setTeas={setTeas}
          ></TeaCard>)
        }
      </div>
    </>
  )
}

export default App

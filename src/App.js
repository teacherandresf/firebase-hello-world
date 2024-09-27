import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './firebase';


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Referencia a la ruta en la base de datos
    const messageRef = ref(database, 'message');

    // Obtener datos de la base de datos
    const unsubscribe = onValue(messageRef, (snapshot) => {
      const data = snapshot.val();
      setMessage(data);
    });

    // Limpieza cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return  (
    <div className="App">
      <h1>Firebase + React: Hola Mundo feo</h1>
      <MyButton />
      <MyButton />
      <p>{message}</p>
    </div>
  );
}

function MyButton(){
  const[contador, setContador] = useState(0);

  function handleClick(){
    setContador(contador + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>Hazme click {contador}</button>
    </div>
  )
}

export default App;

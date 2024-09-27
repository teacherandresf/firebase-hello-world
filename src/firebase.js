// Importar los módulos necesarios de Firebase
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBxR92WjxWG5oCKyfjRuIInziVfQqHTP7I",
    authDomain: "holamundo-37ddc.firebaseapp.com",
    databaseURL: "https://holamundo-37ddc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "holamundo-37ddc",
    storageBucket: "holamundo-37ddc.appspot.com",
    messagingSenderId: "204010237214",
    appId: "1:204010237214:web:8e58d9114b3c5f1535ad0f",
    measurementId: "G-70T8JHSFKW"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener una instancia de la base de datos
const database = getDatabase(app);

// Exportar la instancia de la base de datos
export { database };

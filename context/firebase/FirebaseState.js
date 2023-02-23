import React,{useReducer} from 'react'


import FirebaseContext from './FirebaseContext'
import FirebaseReducer from './FirebaseReducer'
import firebase from '../../firebase'
import { OBTENER_PRODUCTOS } from '../../types/Index'



const FirebaseState =props =>{

//state inical

const initialState ={

    menu:[]
}

//usar reducer


const [state,dispatch]=useReducer(FirebaseReducer,initialState)

//funcion para obtener productos

const obtenerProductos =() =>{


    dispatch({

        type:OBTENER_PRODUCTOS
    });


    firebase.db.collection('productos').where('existencias','==',true)//traer existencia true
    .onSnapshot(manejarSnapshot);

    

}


    return(

<FirebaseContext.Provider value={{menu:state.menu,firebase,obtenerProductos}}>

{props.children}
</FirebaseContext.Provider>
    )
}

export default FirebaseState
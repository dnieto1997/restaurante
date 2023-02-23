import React,{useReducer} from 'react'


import PedidobaseContext from './pedidosContext'
import pedidosReducer from './pedidosReducer'





const PedidosState = props =>{

//state inicial

const initialState ={

    pedido:[]
}

//usar reducer


const [state,dispatch]=useReducer(pedidosReducer,initialState)




    return(

<PedidobaseContext.Provider value={{pedido:state.pedido}}>

{props.children}
</PedidobaseContext.Provider>
    )
}

export default PedidosState
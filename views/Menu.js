import React,{useContext,useEffect} from 'react'
import {Text} from 'react-native'
import FirebaseContext from '../context/firebase/FirebaseContext'
const Menu = () => {
  //context de fierbase

const {obtenerProductos} =useContext(FirebaseContext);
  
  useEffect(()=>{
  obtenerProductos()



  },[])
  
  return (
    <Text>
      Menu
    </Text>
  )
}

export default Menu

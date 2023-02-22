import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormularioPlatillo from './views/FormularioPlatillo';
import DetallePlatillo from './views/DetallePlatillo';
import Menu from './views/Menu';
import NuevaOrden from './views/NuevaOrden';
import ProgresoPedido from './views/ProgresoPedido';
import ResumenPedido from './views/ResumenPedido'



const Stack =createStackNavigator()


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle:{backgroundColor:'#FFDA00'},
          headerTitleStyle:{fontWeight:'bold'}
        }}
        >
  <Stack.Screen
  name="NuevoOrden"
  component={NuevaOrden}
  options={{title:"Nueva Orden"}}
  />

<Stack.Screen
  name="Menu"
  component={Menu}
  options={{title:"Nuestro MenuMenu"}}
  />

<Stack.Screen
  name="DetallePlatillo"
  component={DetallePlatillo}
  options={{title:"Detalle Platillo"}}
  />

<Stack.Screen
  name="FormularioPlatillo"
  component={FormularioPlatillo}
  options={{title:"Ordenar Platillo"}}
  />

<Stack.Screen
  name="ResumenPedido"
  component={ResumenPedido}
  options={{title:"Resumen pedido"}}
  />

<Stack.Screen
  name="ProgresoPedido"
  component={ProgresoPedido}
  options={{title:"Progreso de pedido"}}
  />

       
       
       
       
       
       
        </Stack.Navigator>


      </NavigationContainer>





    </>
  )
}

export default App

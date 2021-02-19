import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Item from '../DetalheItem';
import Lista from '../ListadeItens';
import Carrinho from '../Carrinho';
const Navegation = createStackNavigator();


const NavigationRoutes: React.FC = () =>(
    <Navegation.Navigator headerMode='none'  >
        <Navegation.Screen name="Lista" component={Lista} />
        <Navegation.Screen name="Item" component={Item}/>
        <Navegation.Screen name="Carrinho" component={Carrinho}/>
    </Navegation.Navigator>
);
export default NavigationRoutes;
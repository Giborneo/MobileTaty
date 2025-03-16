import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from '../pages/cadastro/index';
import Login from "../pages/login/login.index";
import Cadastro2 from '../pages/cadastro2/index';
import { NavigationContainer } from "@react-navigation/native";
import Home from '../pages/home/index'
import Favoritos from "../pages/favoritos/index";
import Pedidos from "../pages/pedidos/index"
import BottonRoutes from "./BottonRoutes"
import Cardapio from "../pages/Cardapio/index";
import DetalheProduto from "../pages/detalhe-produto/index";
import DetalhePedido from "../pages/detalhes-pedido/index";



const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        
            <Stack.Navigator
                initialRouteName="Home" 
                screenOptions={{
                     
                    cardStyle: {
                        backgroundColor: '#FFF' 
                    }
                }}
            >
                <Stack.Screen 
                    name='Login' 
                    component={Login} 
                    options={{headerShown: false}}
                    
                />

               < Stack.Screen 
                    name='Home' 
                    component={Home} 
                    options={{headerShown: false}}
                    
                />

                <Stack.Screen 
                    name='Cadastro' 
                    component={Cadastro} 
                    options={{headerShadowVisible: false,
                    title: " ",
                    headerBacktTitle:"Voltar"
                    
                    }}
                />
                <Stack.Screen 
                    name='Cadastro2' 
                    component={Cadastro2} 
                     options={{headerShadowVisible: false,
                    title: " ",
                    headerBacktTitle:"Voltar"
                    
                    }}
                />
                <Stack.Screen 
                    name='Favoritos' 
                    component={Favoritos} 
                    options={{
                      title:"Favoritos",
                      headerTitleAlign: "center",
                      headerShadowVisible:"False"
                    }}
                    
                    
                />
                 <Stack.Screen 
                    name='Pedidos' 
                    component={Pedidos} 
                    options={{
                      title:"Meus Pedidos",
                      headerTitleAlign: "center",
                      headerShadowVisible:"False"
                    }}
                    
                    
                />
                <Stack.Screen 
                    name='BottonRoutes' 
                    component={BottonRoutes} 
                    options={{
                      headerShown: false,
                      headerTitleAlign: "center",
                      headerShadowVisible:"False"
                    }}
                    
                    
                    
                    
                />
                <Stack.Screen 
                    name='Cardapio' 
                    component={Cardapio} 
                    options={{
                      headerTitleAlign: "center",
                      headerShadowVisible:"False"
                    }}
                    />

                    <Stack.Screen 
                    name='DetalheProduto' 
                    component={DetalheProduto} 
                    options={{
                      
                      headerTitleAlign: "center",
                      headerShadowVisible:"False"
                    }}
                    />
                     <Stack.Screen 
                    name='DetalhePedido' 
                    component={DetalhePedido} 
                    options={{
                      headerTitleAlign: "center",
                      headerShadowVisible:"False"
                    }}
                    />
                      

                
            </Stack.Navigator>
       
    );
}

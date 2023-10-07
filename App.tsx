import { useState } from 'react'
import { View, Text, Button } from 'react-native'
import {styles} from './styles'


export default function App(){
  const [valor, setValor] = useState(0);

function incrementar(){
    setValor(valor+1)
}
function decremento(){
    setValor(()=>{return valor == 0 ? 0 : valor-1;})
}
function zerar(){
    setValor(0)
}


  function atualizarContador(incrementar){
    if (incrementar)
    setValor(valor+1)
    else if (valor > 0)
    setValor(valor-1)
  }


  return(
    <View>
      <Text style={styles.titulo}>Contador de Pessoas</Text>


      <Text style={styles.contador}>{valor}</Text>


      <Button title='+' color='green' onPress={() => atualizarContador(true)}/>


      <Button title='-' color='red' onPress={() =>atualizarContador(false)}/>
    </View>
  )
}

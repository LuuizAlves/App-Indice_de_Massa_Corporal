import React, {useState} from 'react';
import { 
  Text,
  TextInput,
  TouchableOpacity,
  View 
} from 'react-native';

import styles from './styles';


export default function App() {
  
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [resultadoText, setResultaText] = useState('');

  function calculoImc(){
    let resultado = peso / (altura * altura);

    if(resultado < 16){
      setResultaText('Magreza Grave');
    }else if(resultado < 17){
      setResultaText('Magreza Moderada');
    }else if(resultado < 18.5){
      setResultaText('Magreza Leve');
    }else if(resultado < 25){
      setResultaText('Saudável');
    }else if(resultado < 30){
      setResultaText('Sobrepeso');
    }else if(resultado < 35){
      setResultaText('Obesidade Grau I');
    }else if(resultado < 40){
      setResultaText('Obesidade Grau II');
    }else {
      setResultaText('Obesidade Grau III');
    }

    setResultado(resultado);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.TextHeader}> Calcúlo de Indíce de Massa Corporal </Text>
      </View>

      <View style={styles.containerInputs}>


        <View style={styles.entradas}>
          <TextInput 
            placeholder="Altura" 
            keyboardType="numeric" 
            style={styles.input}
            onChangeText={ (altura) => {setAltura(altura)} } />

          <TextInput 
            placeholder="Peso" 
            keyboardType="numeric" 
            style={styles.input}
            onChangeText={ (peso) => {setPeso(peso)}} />
        </View>

        <View style={styles.resultado}>
          <Text style={styles.resultadoNumber}> {resultado.toFixed(2)} </Text>
          <Text style={styles.resultadoText}> {resultadoText} </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={ calculoImc }>
          <Text style={styles.buttonText}> Calcular </Text>
        </TouchableOpacity>
      </View>
    <Text style={styles.creator}> Creat by @luuiz_alves =)</Text>
    </View>
  );
}

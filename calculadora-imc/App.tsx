import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputField from './components/InputField';
import ButtonGroup from './components/CustomButton';
import ResultDisplay from './components/ResultDisplay';
import { calcularIMC, classificarIMC } from './uilts/imcUtils';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [corResultado, setCorResultado] = useState('#000');

  const handleCalcular = () => {
    const imc = calcularIMC(peso, altura);
    if (!imc) {
      setResultado('');
      setMensagem('Por favor, insira valores válidos!');
      setCorResultado('red');
      return;
    }

    const { classificacao, cor } = classificarIMC(imc);
    setResultado(imc.toFixed(2));
    setMensagem(classificacao);
    setCorResultado(cor);
  };

  const handleLimpar = () => {
    setPeso('');
    setAltura('');
    setResultado('');
    setMensagem('');
    setCorResultado('#000');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.titulo}>Calculadora de IMC</Text>

          <InputField value={peso} placeholder="Peso (kg)" onChangeText={setPeso} />
          <InputField value={altura} placeholder="Altura (cm ou m)" onChangeText={setAltura} />

          <ButtonGroup onCalcular={handleCalcular} onLimpar={handleLimpar} />

          <ResultDisplay resultado={resultado} mensagem={mensagem} cor={corResultado} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 30,
  },
});




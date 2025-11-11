import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ResultDisplayProps {
  resultado: string;
  mensagem: string;
  cor: string;
}

export default function ResultDisplay({ resultado, mensagem, cor }: ResultDisplayProps) {
  if (!resultado) return null;

  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoTexto}>Seu IMC é:</Text>
      <Text style={[styles.imcValor, { color: cor }]}>{resultado}</Text>
      <Text style={[styles.classificacao, { color: cor }]}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultadoContainer: {
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: 18,
    color: '#2C3E50',
  },
  imcValor: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  classificacao: {
    fontSize: 20,
    fontWeight: '600',
  },
});


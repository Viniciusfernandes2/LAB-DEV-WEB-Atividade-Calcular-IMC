import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface ButtonGroupProps {
  onCalcular: () => void;
  onLimpar: () => void;
}

export default function ButtonGroup({ onCalcular, onLimpar }: ButtonGroupProps) {
  return (
    <View style={styles.botoes}>
      <Button title="Calcular IMC" onPress={onCalcular} color="#2E86C1" />
      <View style={{ width: 10 }} />
      <Button title="Limpar" onPress={onLimpar} color="#95A5A6" />
    </View>
  );
}

const styles = StyleSheet.create({
  botoes: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
});

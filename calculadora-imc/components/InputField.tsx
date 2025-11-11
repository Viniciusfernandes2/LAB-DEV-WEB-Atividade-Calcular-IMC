import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

export default function InputField({ value, placeholder, onChangeText }: InputFieldProps) {
  const handleChange = (text: string) => {
    // Remove qualquer caractere que não seja número ou ponto/virgula
    let novoValor = text.replace(/[^0-9.,]/g, '');

    // Substitui vírgula por ponto (para facilitar cálculo)
    novoValor = novoValor.replace(',', '.');

    // Evita que o usuário digite mais de um ponto
    const partes = novoValor.split('.');
    if (partes.length > 2) {
      novoValor = partes[0] + '.' + partes[1]; // mantém apenas o primeiro ponto
    }

    onChangeText(novoValor);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      value={value}
      onChangeText={handleChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'center',
  },
});


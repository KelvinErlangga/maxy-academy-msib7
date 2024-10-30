import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    // Jika tidak ada angka yang diinputkan, jangan izinkan operator
    if (!input && ['+', '-', '×', '/', '%', '='].includes(value)) return;

    const lastChar = input[input.length - 1];

    if (value === '.') {
      // Mencegah titik jika tidak ada angka atau jika titik sudah ada dalam bilangan
      const lastNumber = input.split(/[\+\-×/%]/).pop();
      if (!lastNumber || lastNumber.includes('.')) return;
    }

    if (['×', '+', '-', '/', '%'].includes(value)) {
      // Jika karakter terakhir adalah operator, gantikan dengan operator baru
      if (['×', '+', '-', '/', '%'].includes(lastChar)) {
        setInput(input.slice(0, -1) + value);
      } else {
        setInput(input + value);
      }
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    // Pastikan hanya menghitung jika ada angka yang diinputkan dan karakter terakhir bukan operator
    if (!input || ['+', '-', '×', '/', '%'].includes(input[input.length - 1])) return;

    try {
      const evalInput = input.replace(/×/g, '*');
      setResult(eval(evalInput).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{result || input || '0'}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Ionicons name="refresh" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Ionicons name="backspace-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('%')}>
          <FontAwesome name="percent" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
          <MaterialCommunityIcons name="division" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('×')}>
          <FontAwesome name="times" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <FontAwesome name="minus" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
          <FontAwesome name="plus" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.doubleButton]} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.equalsButton]} onPress={handleCalculate}>
          <MaterialCommunityIcons name="equal" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  displayContainer: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#E0E0E0',
  },
  displayText: {
    color: 'black',
    fontSize: 48,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  button: {
    width: '25%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BDBDBD',
    borderColor: '#9E9E9E',
    borderWidth: 1,
  },
  doubleButton: {
    width: '50%',
  },
  equalsButton: {
    backgroundColor: '#757575',
  },
  buttonText: {
    fontSize: 28,
    color: 'black',
  },
});

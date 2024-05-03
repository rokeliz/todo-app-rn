import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import EmojiPicker from 'rn-emoji-keyboard'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  return (
    <View style={styles.container}>
      <EmojiPicker onEmojiSelected={() => {}} open={true} onClose={() => {}} />
      <Text
        style={{ fontSize: 50 }}
        onLongPress={() => {
          console.log(count)
        }}
        numberOfLines={15}
      >
        {count}
      </Text>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={(text) => {
          setName(text)
        }}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Add'
          onPress={() => {
            setCount((old) => old + 1)
          }}
        />
        <Button
          title='Decreas'
          onPress={() => {
            setCount((old) => old - 1)
          }}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input: {
    width: '100%',
    minHeight: 50,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 30,
    margin: 20,
    paddingVertical: 5,
  },
})

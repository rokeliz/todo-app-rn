import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import EmojiPicker from 'rn-emoji-keyboard'
import React, { useState } from 'react'

interface ButtonProps {
  title: string
  onPress: () => void
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onLogPress = (title: string) => {
    console.log(title)
  }

  const onEmojiPress = () => {
    setIsOpen(true)
  }

  return (
    <View style={styles.container}>
      <Text>Giedrius</Text>
      <EmojiPicker
        onEmojiSelected={() => {}}
        open={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      />
      <Button
        title={'Emoji'}
        onPress={() => {
          onEmojiPress()
        }}
      />
      <Button
        title={'Log'}
        onPress={() => {
          onLogPress('kazka tiesiog')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#934DEA',
    borderColor: '#000000',
    borderWidth: 1,
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 12,
  },
})

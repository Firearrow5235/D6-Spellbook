import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type ButtonProps = {
  label: string
  textColor: string
  backgroundColor: string
  onClick: () => void
}

const styles = StyleSheet.create({
  wrapper: {
    padding: '8px',
  },
})

const Button: FC<ButtonProps> = ({
  label,
  textColor,
  backgroundColor,
  onClick,
}) => {
  return (
    <View style={{ ...styles.wrapper }}>
      <Text>{label}</Text>
    </View>
  )
}

export default Button

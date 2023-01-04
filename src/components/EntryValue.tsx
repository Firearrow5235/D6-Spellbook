import React, { FC } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  valueWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  label: {
    color: '#999',
    fontSize: 10,
  },
  value: {
    color: '#222',
  },
})

type EntryValueProps = {
  label: string
  value: string
}

const EntryValue: FC<EntryValueProps> = ({ label, value }) => {
  return (
    <View style={styles.valueWrapper}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default EntryValue

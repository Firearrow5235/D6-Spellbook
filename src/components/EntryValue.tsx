import React, { FC } from 'react'
import { StyleSheet, View, Text, FlexAlignType } from 'react-native'

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
  label?: string
  value: string
  alignment?: 'auto' | FlexAlignType
  flexGrow?: number
}

const EntryValue: FC<EntryValueProps> = ({
  label,
  value,
  alignment = 'auto',
  flexGrow = 1,
}) => {
  return (
    <View style={{ ...styles.valueWrapper, flexGrow }}>
      {label && (
        <Text style={{ ...styles.label, alignSelf: alignment }}>{label}</Text>
      )}
      <Text style={{ ...styles.value, alignSelf: alignment }}>{value}</Text>
    </View>
  )
}

export default EntryValue

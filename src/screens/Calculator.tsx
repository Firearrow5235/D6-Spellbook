import React, { FC, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Modal, ScrollView, Button } from 'react-native'
import Input from '../components/Input'

const styles = StyleSheet.create({
  container: {
    maxHeight: '60%',
    maxWidth: '300px',
    backgroundColor: 'white',
    padding: '8px',
    borderRadius: 8,
    overflow: 'hidden',
  },
  sectionLabel: { paddingTop: '4px', paddingBottom: '4px', fontWeight: 'bold' },
})

type CalculatorProps = {
  visible: boolean
  handleClose: (spellTotal: string, targetNumber: string) => () => void
}

const Calculator: FC<CalculatorProps> = ({ visible, handleClose }) => {
  const [spellTotal, setSpellTotal] = useState(0)
  const [targetNumber, setTargetNumber] = useState(0)

  const [costs, setCosts] = useState({
    Effect: '0',
    Range: '0',
    Speed: '0',
    Duration: '0',
    'Area Effect': '0',
    'Change Target': '0',
    Charges: '0',
    Focused: '0',
    'Multiple Targets': '0',
    'Variable Duration': '0',
    'Variable Effect': '0',
    'Variable Move': '0',
    Alterants: '0',
  })

  const [reductions, setReductions] = useState({
    'Cast Time': '0',
    Community: '0',
    Components: '0',
    Concentration: '0',
    Countenance: '0',
    Feedback: '0',
    Gesture: '0',
    Incantation: '0',
    'Unreal Effect': '0',
    Conditions: '0',
  })

  const handleChangeCosts = (key: string) => (newValue: string) => {
    setCosts({
      ...costs,
      [key]: newValue,
    })
  }

  const handleChangeReductions = (key: string) => (newValue: string) => {
    setReductions({
      ...reductions,
      [key]: newValue,
    })
  }

  useEffect(() => {
    const calculateTotals = () => {
      const totalCost = Object.values(costs).reduce(
        (total, cost) => (total += parseInt(cost)),
        0
      )
      const totalReductions = Object.values(reductions).reduce(
        (total, reduction) => (total += parseInt(reduction)),
        0
      )

      const spellValue = Math.max(0, totalCost - totalReductions)
      const spellDifficulty = Math.ceil(spellValue / 2)

      setSpellTotal(spellValue)
      setTargetNumber(spellDifficulty)
    }

    calculateTotals()
  }, [costs, reductions])

  return (
    <Modal animationType="slide" transparent animated visible={visible}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          paddingTop: '80px',
        }}
      >
        <ScrollView style={styles.container}>
          <Text style={{ textAlign: 'center' }}>
            Spell Difficulty Calculator
          </Text>
          <Text style={styles.sectionLabel}>Costs</Text>
          {Object.entries(costs).map(([key, value], index) => (
            <Input
              label={key}
              key={index}
              value={value}
              setValue={handleChangeCosts(key)}
              keyboardType="numeric"
              numbersOnly
            />
          ))}
          <Text style={styles.sectionLabel}>Cost Reductions</Text>
          {Object.entries(reductions).map(([key, value], index) => (
            <Input
              label={key}
              key={index}
              value={value}
              setValue={handleChangeReductions(key)}
              keyboardType="numeric"
              numbersOnly
            />
          ))}
          <Text style={{ ...styles.sectionLabel, textAlign: 'center' }}>
            Spell Total: {spellTotal}
          </Text>
          <Text style={{ ...styles.sectionLabel, textAlign: 'center' }}>
            Target Number: {targetNumber}
          </Text>
          <Button
            title="Apply"
            onPress={handleClose(
              spellTotal.toString(),
              targetNumber.toString()
            )}
          />
        </ScrollView>
      </View>
    </Modal>
  )
}

export default Calculator

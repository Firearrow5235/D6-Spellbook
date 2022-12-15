import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Input from '../components/Input'
import { containers } from '../styles/containers'

const styles = StyleSheet.create({
  sectionLabel: { paddingTop: '4px', paddingBottom: '4px', fontWeight: 'bold' }
})

const Calculator = () => {
  const [spellValue, setSpellValue] = useState(0)
  const [spellDifficulty, setSpellDifficulty] = useState(0)

  const [costs, setCosts] = useState({
    Effect: '0',
    Range: '0',
    Speed: '0',
    Duration: '0',
    "Area Effect": '0',
    "Change Target": '0',
    Charges: '0',
    Focused: '0',
    "Multiple Targets": '0',
    "Variable Duration": '0',
    "Variable Effect": '0',
    "Variable Move": '0',
    Alterants: '0'
  })

  const [reductions, setReductions] = useState({
    "Cast Time": '0',
    Community: '0',
    Components: '0',
    Concentration: '0',
    Countenance: '0',
    Feedback: '0',
    Gesture: '0',
    Incantation: '0',
    "Unreal Effect": '0',
    Conditions: '0'
  })

  const handleChangeCosts = (key: string) => (newValue: string) => {
    setCosts({
      ...costs,
      [key]: newValue
    })
  }

  const handleChangeReductions = (key: string) => (newValue: string) => {
    setReductions({
      ...reductions,
      [key]: newValue
    })
  }

  useEffect(() => {
    const calculateTotals = () => {
      const totalCost = Object.values(costs).reduce((total, cost) => total += parseInt(cost), 0)
      const totalReductions = Object.values(reductions).reduce((total, reduction) => total += parseInt(reduction), 0)

      const spellValue = Math.max(0, totalCost - totalReductions)
      const spellDifficulty = Math.ceil(spellValue / 2)

      setSpellValue(spellValue)
      setSpellDifficulty(spellDifficulty)
    }

    calculateTotals()
  }, [costs, reductions])

  return (
    <View style={containers.page}>
      <View style={containers.content}>
        <Text style={{ textAlign: 'center' }}>Spell Difficulty Calculator</Text>
        <Text style={styles.sectionLabel}>Costs</Text>
        {
          Object.entries(costs).map(([key, value]) =>
            <Input label={key} value={value} setValue={handleChangeCosts(key)} />
          )
        }
        <Text style={styles.sectionLabel}>Cost Reductions</Text>
        {
          Object.entries(reductions).map(([key, value]) =>
            <Input label={key} value={value} setValue={handleChangeReductions(key)} />
          )
        }
        <Text style={{ ...styles.sectionLabel, textAlign: 'center' }}>Spell Total: {spellValue}</Text>
        <Text style={{ ...styles.sectionLabel, textAlign: 'center' }}>Spell Difficulty: {spellDifficulty}</Text>
      </View>
    </View>
  )
}

export default Calculator
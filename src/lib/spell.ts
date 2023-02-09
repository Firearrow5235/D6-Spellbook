import { Spell, Spellbook, SpellInput } from '../types'
import { v4 as uuidv4 } from 'uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const createSpell = async (
  spellInput: SpellInput,
  spellbook: Spellbook
) => {
  const id = uuidv4()

  const spell: Spell = {
    id,
    name: spellInput.Name,
    skill: spellInput.Skill,
    spellTotal: parseInt(spellInput['Spell Total']),
    targetNumber: parseInt(spellInput['Target Number']),
    effect: spellInput.Effect,
    castingTime: spellInput['Casting Time'],
    range: spellInput.Range,
    duration: spellInput.Duration,
    otherAspects: [],
  }

  const updatedSpellbook: Spellbook = {
    ...spellbook,
    spells: [...spellbook.spells, id],
  }

  await AsyncStorage.setItem(id, JSON.stringify(spell))
  await AsyncStorage.setItem(spellbook.id, JSON.stringify(updatedSpellbook))

  return updatedSpellbook
}

export const updateSpell = async (spellInput: SpellInput, spell: Spell) => {
  const updatedSpell: Spell = {
    ...spell,
    name: spellInput.Name,
    skill: spellInput.Skill,
    spellTotal: parseInt(spellInput['Spell Total']),
    targetNumber: parseInt(spellInput['Target Number']),
    effect: spellInput.Effect,
    castingTime: spellInput['Casting Time'],
    range: spellInput.Range,
    duration: spellInput.Duration,
    otherAspects: [],
  }

  await AsyncStorage.setItem(spell.id, JSON.stringify(updatedSpell))

  return updatedSpell
}

export const deleteSpell = async (spellId: string, spellbook: Spellbook) => {
  const updatedSpells = spellbook.spells.filter((spell) => spell !== spellId)

  const updatedSpellbook: Spellbook = {
    ...spellbook,
    spells: updatedSpells,
  }

  await AsyncStorage.removeItem(spellId)
  await AsyncStorage.setItem(spellbook.id, JSON.stringify(updatedSpellbook))

  return updatedSpellbook
}

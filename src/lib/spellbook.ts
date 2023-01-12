import AsyncStorage from '@react-native-async-storage/async-storage'
import { v4 as uuidv4 } from 'uuid'
import { Spellbook, SpellbookInput } from '../types'

export const createSpellbook = async (
  spellbookInput: SpellbookInput
): Promise<{ newSpellbook: Spellbook; updatedRegistry: string[] }> => {
  const id = uuidv4()
  const now = new Date(Date.now())
  const spellbooksRegistry: string[] = await AsyncStorage.getItem(
    'Spellbooks'
  ).then((registry) => (registry ? JSON.parse(registry) : []))
  const updatedRegistry = [...spellbooksRegistry, id]

  const newSpellbook = {
    id,
    name: spellbookInput.Name,
    character: spellbookInput.Character,
    coreAttribute: spellbookInput['Core Attribute'],
    spells: [],
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
  } as Spellbook

  await AsyncStorage.setItem('Spellbooks', JSON.stringify(updatedRegistry))
  await AsyncStorage.setItem(id, JSON.stringify(newSpellbook))

  return { newSpellbook, updatedRegistry }
}

export const editSpellbook = async (
  spellbook: Spellbook,
  spellbookInput: SpellbookInput
): Promise<Spellbook> => {
  const now = new Date(Date.now())

  const updatedSpellbook = {
    ...spellbook,
    name: spellbookInput.Name,
    character: spellbookInput.Character,
    coreAttribute: spellbookInput['Core Attribute'],
    updatedAt: now.toISOString(),
  } as Spellbook

  await AsyncStorage.setItem(spellbook.id, JSON.stringify(updatedSpellbook))

  return updatedSpellbook
}

export const deleteSpellbook = async (
  spellbook: Spellbook
): Promise<string[]> => {
  const spellbooksRegistry: string[] = await AsyncStorage.getItem(
    'Spellbooks'
  ).then((registry) => (registry ? JSON.parse(registry) : []))
  const updatedRegistry = spellbooksRegistry.filter(
    (entry) => entry !== spellbook.id
  )

  await AsyncStorage.multiRemove(spellbook.spells)
  await AsyncStorage.removeItem(spellbook.id)
  await AsyncStorage.setItem('Spellbooks', JSON.stringify(updatedRegistry))

  return updatedRegistry
}

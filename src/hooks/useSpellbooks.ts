import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { Spellbook } from '../../types'

export const useSpellbooks = (): [spellbooks: Spellbook[] | null] => {
  const [spellbooks, setSpellbooks] = useState<Spellbook[] | null>(null)

  const getSpellbooks = async (): Promise<void> => {
    const registryJson = await AsyncStorage.getItem('Spellbooks')

    if (registryJson != null) {
      const registry: string[] = JSON.parse(registryJson)
      const spellbooks = await Promise.all(
        registry.map(async (entry) => {
          const spellbookJson = await AsyncStorage.getItem(entry)
          if (spellbookJson != null) {
            const spellbook = JSON.parse(spellbookJson) as Spellbook
            return spellbook
          } else {
            return null
          }
        })
      )

      const filteredSpellbooks = spellbooks.filter(
        (value) => value !== null
      ) as Spellbook[]

      setSpellbooks(filteredSpellbooks)
    } else setSpellbooks(null)
  }

  useEffect(() => {
    getSpellbooks()
  }, [])

  return [spellbooks]
}

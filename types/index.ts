import { StackScreenProps } from '@react-navigation/stack'

export type RouteParams = {
  Spellbooks: undefined
  'Create a Spellbook': undefined
  'Spell Calculator': undefined
}

export type Spellbook = {
  name: string
  character: string
  coreAttribute: string
}

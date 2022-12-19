import { StackScreenProps } from "@react-navigation/stack"

export type RouteParams = {
  Spellbooks: undefined,
  "Spell Calculator": undefined
}

export type ScreenProps = StackScreenProps<RouteParams, 'Spellbooks', 'Spell Calculator'>
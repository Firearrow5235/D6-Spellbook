export type RouteParams = {
  Spellbooks: undefined
  Spellbook: { spellbook: Spellbook }
  'Create a Spellbook': undefined
  'Spell Calculator': undefined
}

export type Spellbook = {
  id: string
  name: string
  character: string
  coreAttribute: string
}

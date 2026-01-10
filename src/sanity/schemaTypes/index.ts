import { type SchemaTypeDefinition } from 'sanity'
import { article } from './article'
import { iaContent } from './iaContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, iaContent],
}

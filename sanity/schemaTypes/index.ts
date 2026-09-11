import { type SchemaTypeDefinition } from 'sanity'

import { packageType } from './packageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [packageType],
}

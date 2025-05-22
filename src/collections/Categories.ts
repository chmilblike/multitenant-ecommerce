import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: { create: () => false },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}

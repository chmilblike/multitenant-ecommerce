import { isSuperAdmin } from '@/lib/access'
import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
	slug: 'tenants',
	access: {
		create: ({ req }) => isSuperAdmin(req.user),
		delete: ({ req }) => isSuperAdmin(req.user),
	},
	admin: {
		useAsTitle: 'slug',
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
			label: 'Store Name',
			admin: {
				description: "This is the name of the store (e.g. Gaoussou's Store)",
			},
		},
		{
			name: 'slug',
			type: 'text',
			index: true,
			required: true,
			unique: true,
			access: {
				update: ({ req }) => isSuperAdmin(req.user),
			},
			admin: {
				description:
					'This is the subdonmain for the store (e.g. [slug].funroad.com',
			},
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
		},
		{
			name: 'stripAccountId',
			type: 'text',
			required: true,
			access: {
				update: ({ req }) => isSuperAdmin(req.user),
			},
			admin: {
				description: 'Stripe account id connected to your shop',
			},
		},
		{
			name: 'stripDetailsSubmitted',
			type: 'checkbox',
			access: {
				update: ({ req }) => isSuperAdmin(req.user),
			},
			admin: {
				description:
					'You cannot create products until you submit your Stripe details',
			},
		},
	],
}

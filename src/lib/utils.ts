import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function generateTenantURL(tenantSlug: string) {
	const isDevelopment = process.env.NODE_ENV === 'development'
	const isSubdomainRoutingEnable =
		process.env.NEXT_PUBLIC_ENABLE_SUBDOMAIN_ROUTING === 'true'

	// In development mode or subdomain routing disabled mode, use normal routing
	if (isDevelopment || !isSubdomainRoutingEnable) {
		return `${process.env.NEXT_PUBLIC_APP_URL}/tenants/${tenantSlug}`
	}

	const protocol = 'https'
	const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN

	// In production, use subdomain routing
	return `${protocol}://${tenantSlug}.${domain}`
}

export function formatCurrency(value: string | number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		maximumFractionDigits: 0,
	}).format(Number(value))
}

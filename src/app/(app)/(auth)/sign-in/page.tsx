import { SignInView } from '@/modules/auth/server/ui/views/sign-in-view'
import React from 'react'

import { caller } from '@/trpc/server'
import { redirect } from 'next/navigation'

const Page = async () => {
	const session = await caller.auth.session()

	if (session.user) {
		redirect('/')
	}

	return <SignInView />
}

export default Page

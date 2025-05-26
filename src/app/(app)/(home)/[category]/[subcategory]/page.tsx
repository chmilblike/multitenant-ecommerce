interface Props {
	params: Promise<{ category: string; subcategory: string }>
}

const Page = async ({ params }: Props) => {
	const { category, subcategory } = await params

	return (
		<div>
			cat : {category} <br />
			sub : {subcategory}
		</div>
	)
}

export default Page

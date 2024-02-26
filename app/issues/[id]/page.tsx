import { notFound } from 'next/navigation'
import React from 'react'
import prisma from '@/prisma/client'

interface Props {
	params: {
		id: string
	}
}

const IssueDetailPage = async ({params}: Props) => {

	const issue = await prisma.issue.findUnique
	({where: {
			id: Number(params.id)}})
	if (!issue) notFound()

  return (
	
	<div>
		<p>{issue.title}</p>
		<p>{issue.description}</p>
		<p>{issue.createdAt.toDateString()}</p>
	</div>
  )
}


export default IssueDetailPage
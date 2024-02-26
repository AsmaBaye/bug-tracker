import { notFound } from 'next/navigation'
import React from 'react'
import prisma from '@/prisma/client'
import { Card, Flex, Heading } from '@radix-ui/themes'
import IssueStatusBadge from '@/app/components/IssueStatusBadge'

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
		<Heading>{issue.title}</Heading>
		<Flex className='space-x-3' my="2">
		<IssueStatusBadge status={issue.status}/>
		<p>{issue.createdAt.toDateString()}</p>
		</Flex>
		<Card>{issue.description}</Card>
	</div>
  )
}


export default IssueDetailPage
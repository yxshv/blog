import type { NextPage } from 'next'
import Head from 'next/head'
import LinkPost from '../components/LinkPost'

const Home: NextPage = () => {
	return (
		<div className="flex flex-col py-16">
			<Head>
				<title>Blog</title>
			</Head>
			<h1>Posts</h1>
			<ul>
				<LinkPost
					name="Write and deploy blogs in seconds with comments support"
					url="write-blogs-seconds"
					dsc="A few days ago I wrote my first blog and wanted to make a website for it. So I made one using Next.js and MDX. While making it I got an idea..."
				/>
				<LinkPost
					name="How I made a completely Anonymous chat app with go and next.js"
					url="buga-chat-first"
					dsc="So I was learning `go` the other day. And was amazed by its channels. So decided to make something in it. Actually I thought..."
				/>

			</ul>
		</div>
	)
}

export default Home

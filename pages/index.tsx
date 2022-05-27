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
					name="How I made a completely Anonymous chat app with go and next.js"
					url="buga-chat-first"
					dsc="So I was learning `go` the other day. And was amazed by its channels. So decided to make something in it. Actually I thought..."
				/>

			</ul>
		</div>
	)
}

export default Home
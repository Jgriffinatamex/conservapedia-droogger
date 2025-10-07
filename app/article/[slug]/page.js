import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import React from 'react'
import { promises as fs } from 'fs'
import matter from "gray-matter"

async function getPostContent(slug) {
    const folder = 'articles/'
    const file = folder + `${slug}.md`
    const content = await fs.readFile(file, 'utf8')

    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata('articles')
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
    // const id = params?.slug ? ' ⋅ ' + params?.slug : ''
    const { slug } = await params   // <-- await params here
    const id = slug ? ' ⋅ ' + slug : ''
    return {
        title: `Droogger ${id.replaceAll('_', ' ')}`
    }
}

// export default function RecipePage(props) {

//     const slug = props.params.slug
//     const post = getPostContent(slug)
export default async function RecipePage({ params }) {

    const {slug} = await params
    const post = await getPostContent(slug)
    //console.log(post)
    return (
        <main>
            <article>
                <Markdown>{post.content}</Markdown>
            </article>
        </main>
    )
}
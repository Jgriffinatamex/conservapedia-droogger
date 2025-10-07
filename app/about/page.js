import Markdown from "markdown-to-jsx"
// export async function generateMetadata({params,searchParams}) {
//     const id = params?.slug ? '.'+params?.slug : ''
//     return {
//         title: `Droogger ${id.replaceAll('_',' ')}`
//     }
// }
export default function AboutPage(props){
    //const slug = props.params.slug
    //const post = getPostContent(slug)
    //console.log(post)
    return(
        <main>
            <article className="aboutCard">
                <h1>About Droogger</h1>
                    <h2>Our Mission</h2>
                        <p>Droogger exists to explain internet theories, myths, and conspiracies in plain language. We don’t promote them — we document and clarify them, so readers can understand where these ideas come from, how they spread, and why people believe them.</p>
                        <p>In a world flooded with half-truths, rumors, and viral claims, Droogger’s goal is simple: dig deeper, explain clearly, and let you decide what to believe.</p>
                    <h2>Why the Name “Droogger”?</h2>
                        <h3>The word Droogger has two origins.</h3>
                            <p>Our interpretation today: “Droogger” suggests digging — uncovering what’s buried beneath the noise of the internet. Just as a digger uncovers hidden layers, we uncover the background behind conspiracy theories and misinformation.</p>
                            <p>The real story: The name actually comes from A Clockwork Orange, where the main character calls his friends his droogs. It turns out “droog” comes from the Russian word for buddy or partner. Back when I first heard it, I just thought it sounded cool — and later, when I needed a domain name, I added “-er” to it. (Finding an “-er” name that isn’t already taken is surprisingly hard!)</p>
                            <p>Both stories reflect what Droogger is about: a place to explore ideas together and dig beneath the surface.</p>
                    <h2>Who We Are</h2>
                        <p>Droogger is an independent project built for curious people. Whether you’ve stumbled across terms like chemtrails, QAnon, or flat earth and wondered “What does that even mean?” — we’re here to give you the background without the hype.</p>
                        <p>We’re not here to convince you, recruit you, or push an agenda. We’re here to explain.</p>
            </article>
        </main>
    )
} 

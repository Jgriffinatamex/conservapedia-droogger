import Link from "next/link";

export default function Postcard (props){
    const { post } = props
    return (
        <Link className="unstyled" href={`/article/${post.slug}`}>
        {/* <Link className="unstyled" href={`/recipe/${post.slug}`}></Link> */}
            <div className="postCard">
                <h3>{post.title}</h3>
                <p>{post.bio}</p>
                <p align="center">{post.excerpt}</p>
                <div className="statsContainer">
                    <div>
                        <h5>Category</h5>
                        <p>{post.category}</p>
                    </div>
                    <div>
                        <h5>Upload Date</h5>
                        <p>{post.date}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
//import Hero from "@/components/Hero";
import Postcard from "@/components/Postcard";
import getPostMetadata from "@/utils/getPostMetadata";
//import Image from "next/image";


export default function Home() {
  //const postMetadata = getPostMetadata('recipes')
  const postMetadata = getPostMetadata('articles')
  //console.log(postMetadata)
  return (
    <main>
        {/* <div className="aboutContainer">
          <Hero/>
        </div> */}
        <div className="postsContainer">
          {postMetadata.map((post,postIndex)=>{
            return (
              <Postcard key={postIndex} post={post}/>
            )
          })}
        </div>
    </main>
  );
}

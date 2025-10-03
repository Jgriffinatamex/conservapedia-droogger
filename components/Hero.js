import Link from "next/link";

export default function Hero (props){
    const { post } = props
    return (
        <div className="aboutCard">
            <p>
                From UFO sightings to viral medical myths, conspiracies and myths shape how we see the world. 
                At <span className="brand">Droogger</span>, we break down the stories, beliefs, and facts behind today’s most popular theories — so you can decide for yourself what’s real and what’s fiction.
            </p>
            <p>
            <Link className="unstyled" href={'/about'}>
                About
            </Link>
            </p>
        </div>
    )
}

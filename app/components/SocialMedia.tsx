import Link from "next/link";
import Container from "./Container";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

export default function SocialMedia(){
    
    const title = "Nossas Redes Sociais"
    const iconSize = 33

    return (
        <Container>
            <h1 className="uppercase text-yellow-500 mb-3 font-semibold">{title}</h1>
            <Container classNames="flex flex-row gap-3 justify-around h-10">                
                <Link target="_blank" href={"#"}>
                    <SocialMediaIcon icon={<FaFacebook className="text-blue-600 transition hover:scale-110 duration-[600ms]" size={iconSize}/>}/>
                </Link>
                <Link target="_blank" href={"#"}>
                    <SocialMediaIcon icon={<FaInstagram className="instagram-color transition hover:scale-110 duration-[600ms]" size={iconSize}/>}/>
                </Link>
                <Link target="_blank" href={"#"}>
                    <SocialMediaIcon icon={<SiLinkedin className="text-blue-500 transition hover:scale-110 duration-[600ms]" size={iconSize}/>}/>
                </Link>
                <Link target="_blank" href={"#"}>
                    <SocialMediaIcon icon={<FaYoutube className="text-orange-600 transition hover:scale-110 duration-[600ms]" size={iconSize}/>}/>
                </Link>
            </Container>
        </Container>
    )
};
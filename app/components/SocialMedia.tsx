import Link from "next/link";
import Container from "./Container";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
// import { FaSquareInstagram } from "@react-icons/all-files/fa6/FaSquareInstagram";
import { IoLogoInstagram } from "@react-icons/all-files/io5/IoLogoInstagram";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

export default function SocialMedia(){
    
    const title = "Nossas Redes Sociais"
    const iconSize = 33

    // TODO: Ajustar ícones para corresponder ao protótipo

    return (
        <Container>
            <h1 className="uppercase text-yellow-500 mb-3 font-semibold">{title}</h1>
            <Container classNames="flex flex-row gap-3 justify-around h-10">                
                <Link href={"#"}>
                    <SocialMediaIcon icon={<FaFacebook className="text-blue-600" size={iconSize}/>}/>
                </Link>
                <Link href={"#"}>
                    <SocialMediaIcon icon={<IoLogoInstagram className="instagram-color" size={iconSize}/>}/>
                </Link>
                <Link href={"#"}>
                    <SocialMediaIcon icon={<SiLinkedin className="text-blue-500 " size={iconSize}/>}/>
                </Link>
                <Link href={"#"}>
                    <SocialMediaIcon icon={<FaYoutube className="text-orange-600" size={iconSize}/>}/>
                </Link>
            </Container>
        </Container>
    )
};
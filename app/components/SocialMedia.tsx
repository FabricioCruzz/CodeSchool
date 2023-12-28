import Link from "next/link";
import Container from "./Container";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";

export default function SocialMedia(){
    
    const title = "Nossas Redes Sociais"

    return (
        <Container>
            <h1 className="uppercase text-yellow-500">{title}</h1>
            <Link href={"#"}>
                <SocialMediaIcon icon={<FaFacebook className="text-blue-600"/>}/>
            </Link>
            
        </Container>
    )
};
import Image from "next/image";
import Container from "./Container";
import SocialMedia from "./SocialMedia";

export default function Footer(){
    
    const footerLogo = "/images/code-school-footer.svg"
    
    return (
        <footer className="flex flex-row items-center justify-evenly h-80 bg-black">
            <Container>
                <Image
                className="border-r-2 pr-4 border-yellow-500"
                src={footerLogo}
                alt={"Logo da CodeSchool"}
                width={400}
                height={120}
                />
            </Container>
        {/* Divisória + Links das Redes Sociais */}
        <SocialMedia/>
        <span className="text-yellow-500">Novidades e Descontos</span>
        {/* Input com Botão (Reutilizar componente de Search?)*/}
        </footer>
    )
};
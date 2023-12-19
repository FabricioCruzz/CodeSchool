import Image from "next/image"

export default function Card(){
    const cardStyle = "basis-[30%] grow rounded-lg"
    const urlImage = "/images/java-logo.jpg"
    const sizeLogo = 60
    return (
        <>
            <div className={cardStyle}>
                <Image src={urlImage} alt="Logo do curso" width={sizeLogo} height={sizeLogo}/>
                <h2>Título do <span>Curso</span></h2>
                <p>Descrição do curso!</p>
            </div>
        </>    
    )
}
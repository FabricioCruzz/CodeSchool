import Container from "./Container";

export default function Newsletter(){
    const title = "Novidades e Descontos"
    const inputPlaceholder = "Digite o seu melhor email aqui!"
    const btnName = "Receber"
    return (
        <Container classNames="flex flex-col justify-around items-center">
            <h1 className="uppercase text-yellow-500 mb-3 font-semibold">{ title }</h1>
            <Container classNames="flex flex-row items-center bg-yellow-600 rounded w-80">
                <input className="w-full h-10 bg-yellow-600 focus:outline-none rounded-lg text-[0.95rem] placeholder-black pl-3" type="email" placeholder={inputPlaceholder}/>
                <button className="rounded-lg text-black font-semibold uppercase text-base ml-1 pr-3">{btnName}</button>
            </Container>
        </Container>
    )
};
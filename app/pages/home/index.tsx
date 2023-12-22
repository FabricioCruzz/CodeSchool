import Cards from "@/app/components/Cards";
import Container from "@/app/components/Container";

export default function HomePage(){    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-40 py-24">
            <h1 className="text-7xl mb-24 font-thin uppercase text-yellow-600 w-full">Cursos de Destaques na <br/> <span className="font-semibold">CodeSchool</span></h1>

            <Container>
                <Container classNames="flex flex-row gap-12 flex-wrap">
                    <Cards/>
                    <button className="bg-yellow-600 font-bold text-3xl uppercase border border-gray-300 border-opacity-50 px-3 py-1 rounded-lg mx-auto my-4 w-4/12">Cadastrar</button>
                </Container>
            </Container>
        </main>
    )
}
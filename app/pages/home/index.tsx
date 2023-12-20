import Cards from "@/app/components/Cards";
import Container from "@/app/components/Container";

export default function HomePage(){    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-7xl font-thin uppercase text-yellow-600">Cursos de Destaques na <br/> <span className="font-semibold">CodeSchool</span></h1>

            <Container>
                <Container classNames="flex flex-row gap-3 flex-wrap">
                    <Cards/>
                </Container>
            </Container>
        </main>
    )
}
import Card from "@/app/components/Card";
import Container from "@/app/components/Container";

export default function HomePage(){    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Cursos de Destaques na <br/> <span>CodeSchool</span></h1>

            <Container>
                <Container classNames="flex flex-row gap-3 flex-wrap">
                    <div className="basis-[30%] grow bg-red-400 rounded-lg">Card #1</div>
                    <div className="basis-[30%] grow bg-orange-400 rounded-lg">Card #2</div>
                    <div className="basis-[30%] grow bg-green-500 rounded-lg">Card #3</div>
                    <div className="basis-[30%] grow bg-blue-500 rounded-lg">Card #4</div>
                    <div className="basis-[30%] grow bg-amber-700 rounded-lg">Card #5</div>
                    <div className="basis-[30%] grow bg-indigo-500 rounded-lg">Card #6</div>
                    <Card/>
                </Container>
            </Container>
        </main>
    )
}
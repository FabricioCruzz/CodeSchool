import ActiveLink from "./ActiveLink";

export default function LinksGroup(){
    const linkHome = "Home"
    const linkCadastro = "Cadastrar"
    const linkCursos = "Cursos"
    const linkPlanosDeEstudos = "Planos de Estudos"
    const linkSobreNos = "Sobre Nós"

    return (
        <>
            <div>
                <ActiveLink href={"/"}>{linkHome}</ActiveLink>
                <ActiveLink href={"/cadastrar"}>{linkCadastro}</ActiveLink>
                <ActiveLink href={"/cursos"}>{linkCursos}</ActiveLink>
                <ActiveLink href={"/planos-estudos"}>{linkPlanosDeEstudos}</ActiveLink>
                <ActiveLink href={"/sobre"}>{linkSobreNos}</ActiveLink>
            </div>
        </>
    )
}
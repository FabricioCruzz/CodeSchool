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
                <ActiveLink href={"#"}>{linkCadastro}</ActiveLink>
                <ActiveLink href={"#"}>{linkCursos}</ActiveLink>
                <ActiveLink href={"#"}>{linkPlanosDeEstudos}</ActiveLink>
                <ActiveLink href={"#"}>{linkSobreNos}</ActiveLink>
            </div>
        </>
    )
}
import Link from "next/link";

export default function LinksGroup(){
    const linkHome = "Home"
    const linkCadastro = "Cadastrar"
    const linkCursos = "Cursos"
    const linkPlanosDeEstudos = "Planos de Estudos"
    const linkSobreNos = "Sobre Nós"

    const colorLink = "mx-3 p-2 text-yellow-600 text-lg font-medium hover:text-yellow-700"

    /* TODO:
        Colocar barra inferior no link que representa a página exibida. Obs.: Para mais detalhes
        olhar no protótipo.
    */

    return (
        <>
            <div>
                <Link className={colorLink} href={"#"}>{linkHome}</Link>
                <Link className={colorLink} href={"#"}>{linkCadastro}</Link>
                <Link className={colorLink} href={"#"}>{linkCursos}</Link>
                <Link className={colorLink} href={"#"}>{linkPlanosDeEstudos}</Link>
                <Link className={colorLink} href={"#"}>{linkSobreNos}</Link>
            </div>
        </>
    )
}
import Image from "next/image";
import LinksGroup from "./LinksGroup";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function NavBar(){
    const logo = "/images/code-school-logo.svg"
    return (
        <nav className="flex flex-row justify-between items-center bg-zinc-950 py-2 border-solid border-b-2 border-yellow-600">
            <Link href={"#"}>
                <Image
                    className="ml-5 mr-5 px-2"
                    src={logo}
                    width={170}
                    height={170}
                    alt="Logotipo da CodeSchool"
                />
            </Link>
            <LinksGroup/>
            <SearchBar/>
        </nav>
    )
}
import Image from "next/image";
import LinksGroup from "./LinksGroup";
import SearchBar from "./SearchBar";

export default function NavBar(){
    const logo = "/images/logo.png"
    return (
        <nav className="flex flex-row justify-between items-center bg-zinc-950 py-3 border-solid border-b-2 border-yellow-600">
            <Image
                className="ml-5"
                src={logo}
                width={200}
                height={200}
                alt="Logotipo da CodeSchool"
                />
            <LinksGroup/>
            <SearchBar/>
        </nav>
    )
}
// "use client;"
// import { useState } from "react";
import Container from "./Container";
import { CgSearch } from "react-icons/cg";

export default function SearchBar(){
    // const [input, setInput] = useState("");

    const placeholderInput = "O que deseja aprender hoje?"
    return (
        <Container classNames="flex flex-row justify-around items-center rounded w-1/5 gap-3 mr-36 px-3 h-7 bg-yellow-600">
                <input className="w-full h-5 focus:outline-none rounded-lg bg-yellow-600 text-sm placeholder-black pl-2" type="text" placeholder={placeholderInput} />
                <button className="mr-2 transition hover:scale-125 duration-[600ms]"><CgSearch/></button>
        </Container>
    )
}
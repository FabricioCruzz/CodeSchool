'use client';
import { useEffect, useState } from "react"
import Image from "next/image"
import Container from "./Container";

interface CourseData{
    id: number,
    courseName: string,
    image: string,
    description: string
}

export default function Cards(){

    const [courses, setCourses] = useState<[CourseData]>()
    const urlCoursesData = './data/courses.json'
    useEffect(() => {
        fetch(urlCoursesData, {
            headers: {
                Accept: "application/json"
            }
        })
        .then(res => res.json())
        .then(res => setCourses(res.data))

    }, [])

    const cardStyle = "basis-[30%] grow rounded-lg bg-black text-yellow-600 bg-opacity-60 px-5 py-4"
    const sizeLogo = 60
    return (
        <>
            {courses?.map((course: CourseData) => (
                <div key={course.id} className={cardStyle}>
                    <Container classNames="flex flex-row gap-3 justify-start items-center mb-6">
                        <Image src={course.image} alt={`Logo do ${course.courseName}`} width={sizeLogo} height={sizeLogo}/>
                        <h2 className="ml-5">Curso de <br/> <span className="font-bold text-2xl uppercase">{course.courseName}</span></h2>
                    </Container>
                    <p>{course.description}</p>
                </div>
            ))}
        </>    
    )
}
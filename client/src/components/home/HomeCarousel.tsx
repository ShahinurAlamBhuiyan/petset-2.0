"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Carousel1 from "@/assets/Carousel/carousel-1.jpg"
import Carousel2 from "@/assets/Carousel/carousel-2.jpg"

const slides = [
    {
        img: Carousel1,
        title: (
            <>
                Be Happy With Your <span className="text-primary">Pet</span>
            </>
        ),
        subtitle: (
            <>
                A social media for Pet <span className="text-secondary">Lovers</span>
            </>
        ),
        desc: "Share Memories, Post for Adoption, Search for your Lost Pet and So on",
        btn1: { text: "Post Memories", link: "/memories" },
        btn2: { text: "Post for Adoption", link: "/adaptation" },
    },
    {
        img: Carousel2,
        title: (
            <>
                Book <span className="text-secondary">Specialists</span> and Buy Pet{" "}
                <span className="text-primary">Goods</span>
            </>
        ),
        subtitle: (
            <>
                Best Pet <span className="text-primary">Services</span> and{" "}
                <span className="text-primary">Store</span>
            </>
        ),
        desc: "This is a place for your beloved pets' health care, buying food, and gifting goods",
        btn1: { text: "Get Services", link: "/services" },
        btn2: { text: "Buy from Store", link: "/store" },
    },
]

const HomeCarousel = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 40000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-[83vh] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.img}
                        alt="carousel"
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center max-w-4xl px-4">
                            <h3 className="text-white mb-3 hidden sm:block">{slide.subtitle}</h3>
                            <h1 className="text-4xl md:text-7xl font-bold text-white mb-3">{slide.title}</h1>
                            <p className="text-white mb-4 hidden sm:block">{slide.desc}</p>
                            <div className="flex gap-4 justify-center">
                                <a href={slide.btn1.link} className="btn btn-primary">
                                    {slide.btn1.text}
                                </a>
                                <a href={slide.btn2.link} className="btn btn-secondary">
                                    {slide.btn2.text}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation buttons */}
            <button
                onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-14 top-1/2 -translate-y-1/2 bg-primary p-3 rounded-full"
            >
                ❮
            </button>
            <button
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                className="absolute right-14 top-1/2 -translate-y-1/2 bg-primary p-3 rounded-full"
            >
                ❯
            </button>
        </div>
    )
}

export default HomeCarousel

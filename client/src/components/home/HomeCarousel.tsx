"use client"
import { useState, useEffect } from "react"
import Carousel1 from "@/assets/Carousel/carousel-1.jpg"
import Carousel2 from "@/assets/Carousel/carousel-2.jpg"

const slides = [
    {
        img: Carousel1.src,
        title: (
            <>
                Be <span className="text-primaryGreen">Happy </span>With Your{" "}
                <span className="text-primaryOrange">Pet</span>
            </>
        ),
        subtitle: (
            <>
                A social media for Pet <span className="text-primaryOrange">Lovers</span>
            </>
        ),
        desc: "Share Memories, Post for Adoption, Search for your Lost Pet and So on",
        btn1: { text: "Post Memories", link: "/memories" },
        btn2: { text: "Post for Adoption", link: "/adaptation" },
    },
    {
        img: Carousel2.src,
        title: (
            <>
                Book <span className="text-primaryGreen">Specialists</span> and Buy Pet{" "}
                <span className="text-primaryOrange">Goods</span>
            </>
        ),
        subtitle: (
            <>
                Best Pet <span className="text-primaryOrange">Services</span> and{" "}
                <span className="text-primaryOrange">Store</span>
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
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length)
    const handlePrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <div className="relative w-full h-[85vh] overflow-hidden bg-black">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"
                        }`}
                    style={{
                        backgroundImage: `url(${slide.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-center max-w-4xl px-4 mt-24">
                            <h3 className="text-white mb-3  text-[28px] font-bold hidden sm:block">
                                {slide.subtitle}
                            </h3>
                            <h1 className="text-4xl md:text-7xl font-bold text-white mb-3">{slide.title}</h1>
                            <p className="text-white mb-4  font-bold text-xl">{slide.desc}</p>
                            <div className="flex flex-wrap-reverse gap-4 justify-center">
                                <a
                                    href={slide.btn1.link}
                                    className="custom-button !text-white !bg-primaryOrange opacity-80 hover:!opacity-100"
                                >
                                    {slide.btn1.text}
                                </a>
                                <a
                                    href={slide.btn2.link}
                                    className="custom-button !text-white !bg-primaryGreen !border-none opacity-80 hover:opacity-100"
                                >
                                    {slide.btn2.text}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 bg-primaryOrange px-5 py-3 rounded-lg opacity-80 hover:opacity-100 cursor-pointer text-white font-extrabold z-40 hidden sm:block"
            >
                ❮
            </button>
            <button
                onClick={handleNext}
                className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 bg-primaryOrange px-5 py-3 rounded-lg opacity-80 hover:opacity-100 cursor-pointer text-white font-extrabold z-40 hidden sm:block"
            >
                ❯
            </button>
        </div>
    )
}

export default HomeCarousel

import Image from "next/image"
import Link from "next/link"

// Sample specialist images (replace with your assets)
import doc1 from "@/assets/specialist/team-1.jpg"
import doc2 from "@/assets/specialist/team-2.jpg"
import doc3 from "@/assets/specialist/team-3.jpg"
import doc4 from "@/assets/specialist/team-4.jpg"

type Specialist = {
    id: number
    img: any
    name: string
    specialty: string
    bio: string
    link: string
}

const specialists: Specialist[] = [
    {
        id: 1,
        img: doc1,
        name: "Dr. Amelia Carter",
        specialty: "Feline Nutritionist",
        bio: "Expert in creating balanced meal plans that promote long-term feline health and vitality.",
        link: "/specialists/amelia-carter",
    },
    {
        id: 2,
        img: doc2,
        name: "Dr. Ethan Reynolds",
        specialty: "Feline Behaviorist",
        bio: "Helps cat owners understand and correct behavioral issues while strengthening bonds.",
        link: "/specialists/ethan-reynolds",
    },
    {
        id: 3,
        img: doc3,
        name: "Dr. Sophia Martinez",
        specialty: "Veterinary Surgeon",
        bio: "Specialist in advanced feline surgeries with a gentle, compassionate approach to recovery.",
        link: "/specialists/sophia-martinez",
    },
    {
        id: 4,
        img: doc4,
        name: "Dr. Olivia Bennett",
        specialty: "Feline Dermatologist",
        bio: "Focused on treating skin conditions, allergies, and coat health to keep cats comfortable and confident.",
        link: "/specialists/olivia-bennett",
    }
]

const CatSpecialists = () => {
    return (
        <section className="custom-container bg-[#f9f9fb] py-16">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h4 className="text-primaryGreen text-[22px] sm:text-[28px] font-bold">
                    Popular Specialists
                </h4>
                <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold text-primaryOrange">
                    Meet Our <span className="text-black">Cat Experts</span>
                </h1>
            </div>

            {/* Specialists List */}
            <div className="flex flex-wrap justify-center gap-8">
                {specialists.map((doc) => (
                    <div
                        key={doc.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition w-full sm:w-[45%] lg:w-[30%] 2xl:w-[22%] p-6 flex flex-col"
                    >
                        {/* Specialist Image */}
                        <div className="mb-4 rounded-lg overflow-hidden">
                            <Image
                                src={doc.img}
                                alt={doc.name}
                                className="w-full h-60 object-cover"
                            />
                        </div>

                        {/* Info */}
                        <h3 className="text-2xl font-semibold text-primaryGreen mb-1">
                            {doc.name}
                        </h3>
                        <p className="text-primaryOrange font-medium mb-3">{doc.specialty}</p>
                        <p className="text-paragraph mb-4 text-md flex-grow">{doc.bio}</p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-auto">
                            <Link
                                // href={doc.link}
                                href='#'
                                className="text-primaryGreen font-semibold hover:underline"
                            >
                                Learn More →
                            </Link>
                            <Link
                                // href={`/appointments?specialist=${doc.id}`}
                                href='#'
                                className="text-primaryOrange font-semibold hover:underline"
                            >
                                Book Appointment →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CatSpecialists

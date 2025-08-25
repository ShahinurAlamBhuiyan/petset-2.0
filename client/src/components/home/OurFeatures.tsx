import { Bone, Syringe, BadgePlus, Hotel } from 'lucide-react'
import Link from 'next/link'

const features = [
    {
        id: 3,
        img: <BadgePlus className="w-20 h-20 sm:w-24 sm:h-24 text-primaryGreen" />,
        featureName: 'Treatment',
        description:
            "Trust the well-being of your pets to our experienced veterinary team at PetSet. From routine check-ups to specialized care, we provide comprehensive treatment, ensuring your furry friends thrive in a nurturing environment.",
        link: '/services',
    },
    {
        id: 1,
        img: <Bone className="w-20 h-20 sm:w-24 sm:h-24 text-primaryGreen" />,
        featureName: 'Pet Feeding',
        description:
            "Nutritious meals tailored to your pet's preferences, served with love at PetSet. Our dedicated feeding routine ensures your furry family members enjoy a healthy and satisfying dining experience. Energize. Play. Thrive.",
        link: '/store',
    },
    {
        id: 2,
        img: <Syringe className="w-20 h-20 sm:w-24 sm:h-24 text-primaryGreen" />,
        featureName: 'Medicine',
        description:
            "Ensure your pet's well-being with our expert pet medicine service. Our veterinary team provides personalized care, administering essential medications and treatments to keep your furry friend healthy and thriving.",
        link: '/store',
    },
    {
        id: 4,
        img: <Hotel className="w-20 h-20 sm:w-24 sm:h-24 text-primaryGreen" />,
        featureName: 'Pet Boarding',
        description:
            "Safe, cozy, and supervised boarding services for your pets while you’re away. Our caring team ensures they feel right at home.",
        link: '/services',
    },
]

const OurFeatures = () => {
    return (
        <div className="custom-container bg-[#f2f2f4] py-12">
            <h4 className="text-primaryGreen text-[28px] font-bold hidden sm:block text-center">
                Popular Features
            </h4>
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold text-primaryOrange mb-10 text-center">
                Premium <span className="text-black">Pet Features</span>
            </h1>

            {/* Flexbox Layout */}
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="bg-white p-6 rounded-lg hover:shadow-xl transition w-full sm:w-[45%] lg:w-[30%] 2xl:w-[22%]"
                    >
                        <div className="mb-4 flex justify-center">{feature.img}</div>
                        <h3 className="text-2xl font-semibold mb-2 text-center">{feature.featureName}</h3>
                        <p className="text-paragraph mb-4 text-md text-center">{feature.description}</p>
                        <div className="text-center">
                            <Link
                                href={feature.link}
                                className="text-primaryGreen font-semibold hover:underline"
                            >
                                Learn More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurFeatures

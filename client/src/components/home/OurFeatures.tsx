import Link from 'next/link'
import { features } from '@/data/landing'


const OurFeatures = () => {
    return (
        <div className="custom-container bg-[#f2f2f4]">
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

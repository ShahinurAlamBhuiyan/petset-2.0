import Image from 'next/image'

import chooseUsImg from '@/assets/whychooseus.jpg'
import { PawPrint, Heart, ShieldCheck, Utensils } from 'lucide-react'

type Props = {}
const WhyChoose = (props: Props) => {
    return (
        <section
            className="custom-container bg-white/80 grid lg:grid-cols-2 2xl:grid-cols-3 gap-10"
        >
            <Image
                src={chooseUsImg}
                alt="why choose us"
                className="rounded-lg h-full object-cover order-2 lg:order-1"
            />

            {/* Right Side Content */}
            <div className='flex flex-col justify-start gap-4 2xl:col-span-2 order-1 lg:order-2'>
                <h4 className="text-primaryGreen text-[22px] sm:text-[28px] font-bold">
                    Why Choose Us?
                </h4>
                <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold text-primaryOrange">
                    PetSet Perks: <br />
                    <span className="text-black">
                        Elevating Pet Care Beyond Boundaries
                    </span>
                </h1>

                <p className="text-paragraph mb-4 text-lg">
                    Discover a world of unparalleled pet care at PetSet. From preserving
                    precious memories and reuniting lost pets to providing gourmet
                    cuisine and enriching toys, our comprehensive services are designed
                    to ensure every furry friend’s happiness and well-being. Choose
                    PetSet for a personalized, holistic, and delightful pet care
                    experience.
                </p>

                {/* Features List */}
                <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                        <div className="bg-primaryGreen/10 p-3 rounded-full">
                            <PawPrint className="w-6 h-6 text-primaryGreen" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Holistic Pet Care</h3>
                            <p className="text-paragraph text-md">
                                From health to happiness, we cover every aspect of your
                                pet’s well-being.
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start gap-4">
                        <div className="bg-primaryGreen/10 p-3 rounded-full">
                            <Heart className="w-6 h-6 text-primaryGreen" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Loving Professionals</h3>
                            <p className="text-paragraph text-md">
                                Our passionate team treats every pet like family,
                                ensuring trust and comfort.
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start gap-4">
                        <div className="bg-primaryGreen/10 p-3 rounded-full">
                            <ShieldCheck className="w-6 h-6 text-primaryGreen" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Safety & Trust</h3>
                            <p className="text-paragraph text-md">
                                With 24/7 care and advanced monitoring, your pet’s safety
                                is always our top priority.
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start gap-4">
                        <div className="bg-primaryGreen/10 p-3 rounded-full">
                            <Utensils className="w-6 h-6 text-primaryGreen" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Gourmet Pet Meals</h3>
                            <p className="text-paragraph text-md">
                                Nutritious and delicious meals, carefully curated for
                                every pet’s unique taste.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default WhyChoose

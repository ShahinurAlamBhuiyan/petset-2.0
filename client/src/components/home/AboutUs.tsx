
import Image from 'next/image'
import commonBg from '@/assets/bg.png'
import aboutImg from '@/assets/about/aboutImage.jpg'
import { CheckCheck } from 'lucide-react'

type Props = {}
const AboutUs = (props: Props) => {
    return (
        <div
            className="relative custom-container grid md:grid-cols-2 gap-10 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${commonBg.src})` }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-white/80 rounded-lg"></div>

            {/* content */}
            <div className="relative flex flex-col gap-3 xl:gap-6 z-10">
                <h4 className="text-primaryGreen text-[28px] font-bold hidden xl:block">About Us</h4>
                <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold text-primaryOrange mb-3">
                    A Comprehensive <br />
                    <span className="text-primaryGreen">Pet Haven</span>
                </h1>
                <h4 className="text-paragraph text-2xl font-bold">
                    Beyond Care: Tailored Services for Every Pet's Needs
                </h4>
                <p className="text-paragraph font-medium text-xl">
                    Embark on a journey with PetSet, where our commitment goes beyond traditional pet care. Explore the array of specialized services designed to cater to every facet of your furry companion's life.
                </p>
                <ul className="font-extrabold">
                    <li className="flex gap-4"><CheckCheck className="text-primaryGreen" size={30} /> Memory Storing</li>
                    <li className="flex gap-4"><CheckCheck className="text-primaryGreen" size={30} /> Adopt Pet</li>
                    <li className="flex gap-4"><CheckCheck className="text-primaryGreen" size={30} /> Medical Service</li>
                    <li className="flex gap-4"><CheckCheck className="text-primaryGreen" size={30} /> Pet Store</li>
                    <li className="flex gap-4"><CheckCheck className="text-primaryGreen" size={30} /> Hostel</li>
                </ul>
            </div>
            {/* Images */}
            <div className="relative w-full z-10 flex md:justify-end">
                <Image src={aboutImg} className="rounded-lg 2xl:rounded-lg lg:max-w-[90%] 2xl:max-w-[65%]" alt="Pet haven" />
            </div>

        </div>

    )
}
export default AboutUs
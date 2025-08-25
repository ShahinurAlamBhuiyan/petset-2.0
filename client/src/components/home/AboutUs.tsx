
import Image from 'next/image'
import commonBg from '@/assets/bg.png'
import aboutImg from '@/assets/about/aboutImage.jpg'
import { CheckCheck } from 'lucide-react'

type Props = {}
const AboutUs = (props: Props) => {
    return (
        <div
            className="relative custom-container grid lg:grid-cols-2 2xl:grid-cols-3 gap-10 bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${commonBg.src})` }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-white/80 rounded-lg" />

            {/* content */}
            <div className="relative flex flex-col gap-3 xl:gap-6 z-10 2xl:col-span-2 order-1 lg:order-2">
                <h4 className="text-primaryGreen text-[28px] font-bold hidden xl:block">About Us</h4>
                <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold text-primaryOrange mb-3">
                    A Comprehensive <br />
                    <span className="text-primaryGreen">Pet Haven</span>
                </h1>
                <h4 className="text-paragraph text-2xl font-bold">
                    Beyond Care: Tailored Services for Every Pet's Needs
                </h4>
                <p className="text-paragraph font-medium text-lg">
                    Embark on a heartfelt journey with PetSet, where pet care is not just a service but a promise of love, trust, and excellence. We go beyond traditional routines to create a holistic experience tailored to your furry friend’s unique needs. From nutritious meals and expert medical attention to safe boarding, playful enrichment, and round-the-clock support, every detail is designed to nurture their health, happiness, and spirit. With PetSet, you’re not simply choosing care—you’re choosing a lifelong partner devoted to elevating every moment of your companion’s life.
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
            <Image src={aboutImg} className="relative rounded-lg h-full object-cover order-2 lg:order-1" alt="Pet haven" />

        </div>

    )
}
export default AboutUs
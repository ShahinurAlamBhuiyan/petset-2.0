
import Image from 'next/image'
import aboutImg1 from '../../assets/about/about-1.jpg'
import aboutImg2 from '../../assets/about/about-2.jpg'
import aboutImg3 from '../../assets/about/about-3.jpg'
import { CheckCheck } from 'lucide-react'

type Props = {}
const AboutUs = (props: Props) => {
    return (
        <div className="custom-container grid  sm:grid-cols-2 gap-10">
            {/* content */}
            <div className='flex flex-col gap-3 xl:gap-6'>
                <h4 className="text-primaryGreen text-[28px] font-bold hidden xl:block">About Us</h4>
                <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold text-primaryOrange mb-3">A Comprehensive <br />
                    <span className="text-primaryGreen">Pet Haven</span>
                </h1>
                <h4 className="text-[#777] text-2xl font-bold">Beyond Care: Tailored Services for Every Pet's Needs</h4>
                <p className='text-[#36454F] font-medium text-xl'>
                    Embark on a journey with PetSet, where our commitment goes beyond traditional pet care. Explore the array of specialized services designed to cater to every facet of your furry companion's life.
                </p>
                <ul className='font-extrabold'>
                    <li className='flex gap-4'><CheckCheck className='text-primaryGreen text-[28px] font-extrabold' size={30} /> Memory Storing</li>
                    <li className='flex gap-4'><CheckCheck className='text-primaryGreen text-[28px] font-extrabold' size={30} /> Adopt Pet</li>
                    <li className='flex gap-4'><CheckCheck className='text-primaryGreen text-[28px] font-extrabold' size={30} /> Medical Service</li>
                    <li className='flex gap-4'><CheckCheck className='text-primaryGreen text-[28px] font-extrabold' size={30} /> Pet Store</li>
                    <li className='flex gap-4'><CheckCheck className='text-primaryGreen text-[28px] font-extrabold' size={30} /> Hostel</li>
                </ul>
            </div>

            {/* Images */}
            <div className='w-full'>
                <Image src={aboutImg1} className='w-full rounded-t-lg 2xl:rounded-lg' alt='Pet haven' />
                <div className='flex flex-col lg:flex-row'>
                    <Image src={aboutImg2} className='w-full block rounded-b-lg 2xl:hidden' objectFit='cover' alt='pet haven' />
                    <Image src={aboutImg3} className='w-full block rounded-b-lg lg:hidden' objectFit='cover' alt='pet haven' />
                </div>
            </div>
        </div>
    )
}
export default AboutUs
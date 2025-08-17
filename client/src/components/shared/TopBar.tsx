import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

const TopBar = () => {
    return (
        <div className="custom-container !py-2 bg-primaryOrange hidden sm:flex justify-between items-center">
            <div className="text-white space-x-3 font-bold">
                <span className="cursor-pointer">FAQs</span>
                <span>|</span>
                <span className="cursor-pointer">Help</span>
                <span>|</span>
                <span className="cursor-pointer">Support</span>
            </div>
            <div className=" space-x-3 flex justify-center items-center">
                <a href="#">
                    <Facebook size={30} className="bg-white rounded-full text-primaryOrange p-[6px]" />
                </a>
                <a href="#">
                    <Twitter size={30} className="bg-white rounded-full text-primaryOrange p-[6px]" />
                </a>
                <a href="#">
                    <Linkedin size={30} className="bg-white rounded-full text-primaryOrange p-[6px]" />
                </a>
                <a href="#">
                    <Youtube size={30} className="bg-white rounded-full text-primaryOrange p-[6px]" />
                </a>
                <a href="#">
                    <Instagram size={30} className="bg-white rounded-full text-primaryOrange p-[6px]" />
                </a>
            </div>
        </div>
    )
}
export default TopBar
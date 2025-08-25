import { BadgePlus, Bone, Hotel, Syringe } from "lucide-react";

export const features = [
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
        link: '/boarding',
    },
]
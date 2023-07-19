import { AppImages } from "../components/AppImages";

export const navItems = [
    {
        id: 1, name: 'About', childList: [
            { id: '1a', name: 'About Us', path: '/about' },
            { id: '1b', name: 'Gallery', path: '/gallery' }, 
            { id: '1c', name: 'Documents & Certificates', path: '/documents-and-certificates' },
            { id: '1d', name: 'Testimonials', path: '/testimonials' }
        ]
    },
    {
        id: 2, name: 'Our Services', childList: [
            { id: '1a', name: 'Emptying & Servicing', path: '/emptying-servicing' },
            { id: '1b', name: 'Construction Services', path: '/construction-services' },
            { id: '1c', name: 'Event Services', path: '/event-services' },
        ]
    },
    // { id: 2, name: 'Construction Services', path: '/construction-services' },
    // { id: 3, name: 'Event Services', path: '/event-services' },
];

export const socialLinks = [
    { id: 1, name: 'twitter', image: AppImages.twitterlIcon, href: 'https://twitter.com/MidsToiletHire' },
    { id: 2, name: 'linkedIn', image: AppImages.linkedinIcon, href: 'https://www.linkedin.com/company/midland-toilet-hire' },
    { id: 3, name: 'facebook', image: AppImages.fbIcon, href: 'https://www.facebook.com/hireloos/' },
]

export const socialContact = [
    { id: 1, name: 'email', image: AppImages.envelopIcon, content: 'admin@midlandtoilethire.com' },
    { id: 2, name: 'find', image: AppImages.locationIcon, content: '8 Tenby Street Jewellery Quarter , Birmingham, United Kingdom' },
    { id: 3, name: 'call', image: AppImages.phoneIcon, content: '0800 999 2820' },
]

export const proServices = [
    { id: 1, name: 'CONSTRUCTION SERVICES', image: AppImages.constructionServices },
    { id: 2, name: 'EVENT HIRE & SERVICES', image: AppImages.eventHireServices },
    { id: 3, name: 'EMPTYING & SERVICING', image: AppImages.emplyingServicing },
    { id: 4, name: 'WELFARE SERVICES', image: AppImages.welfareServices },
    { id: 5, name: 'ABOUT Midland Toilet Hire', image: AppImages.aboutMidlandToiletHire },
]

export const proServicesVideos = [
    { id: 1, image: AppImages.proService1, url: 'https://youtu.be/myqXjXikVUQ' },
    { id: 2, image: AppImages.proService2, url: 'https://youtu.be/jXdIle02qNw' },
    { id: 3, image: AppImages.proService3, url: 'https://youtu.be/jXdIle02qNw' },
    { id: 4, image: AppImages.proService4, url: 'https://youtu.be/hLc5g4lcFxs' },
]

export const allServices = [
    { id: 1, name: 'Site Toilet' },
    { id: 2, name: 'Hotwash' },
    { id: 3, name: 'Portable Mains Connect' },
    { id: 4, name: 'Fresh Flush Toilet' },
    { id: 5, name: 'Event Range' },
    { id: 6, name: 'Fresh Flush VIP' },
    { id: 7, name: 'Wheelchair Toilet' },
    { id: 8, name: '4 Bay Urinal' },
    { id: 9, name: '6 Bay Urinal' },
    { id: 10, name: 'Welfare Unit Hire' },
    { id: 11, name: 'Emptying and Servicing' }
]

export const documentCertificates = [
    { id: 1, name: 'Waste Transfer Certificate' },
    { id: 2, name: 'Waste Carriers Licence 2018' },
    { id: 3, name: 'Employers Liability Insurance 2018' },
    { id: 4, name: 'Public and Product Liability Insurance 2018' },
    { id: 5, name: 'Application Form', type: 'email' },
]

export const Testimonials = [
    { id: 1, name: 'James Anderson', comment: "I recently used Midland Toilet Hire's services for an outdoor event in West Midlands, and I was extremely impressed! The toilets were clean, well-maintained, and easily accessible. The staff at Midland Toilet Hire was friendly and professional throughout the entire process. I highly recommend their services to anyone in need of portable toilets!"}
]

export const areas = ['West Midlands', 'Staffordshire', 'Warwickshire', 'Worcestershire']

export const galleryData = [AppImages.gallery1, AppImages.gallery2, AppImages.gallery3, AppImages.gallery4, AppImages.gallery5, AppImages.gallery6, AppImages.gallery7, AppImages.gallery8]
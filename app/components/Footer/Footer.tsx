import Link from "next/link";
import Image from "next/image";

// MIDDLE LINKS DATA
interface ProductType {
id: number;
link: { text: string; href: string; submenu?: string[] }[];  // Added href for each link
}

const products: ProductType[] = [
{
    id: 1,
    link: [
        { text: 'Home', href: '/' }, // Set the path for Home
        { text: 'Contact', href: './contact' }, // Set the path for Contact
        { text: 'FAQ', href: './faq' }, // Set the path for Popular
        { text: 'About', href: '/' }, // Set the path for About
    ],
},
{
    id: 2,
    link: [
        { text: 'Services', href: './services' }, // Services link
        { text: 'Consulting', href: './services' }, // Set the path for Consulting
        { text: 'Salesforce Solutions', href: './services' }, // Set the path for Salesforce Solutions
        { text: 'Implementation', href: './services' }, // Set the path for Implementation
        { text: 'Support & Training', href: './services' }, // Set the path for Support & Training
    ],
},
];

const Footer = () => {
return (
    <div className="bg-darkblue mt-10">
        <div className="mx-auto max-w-2xl pt-12 px-4 sm:px-6 lg:max-w-7xl lg:px-2">
            <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                {/* COLUMN-1 */}
                <div className='col-span-4 md:col-span-12 lg:col-span-4'>
                <Image src={'/assets/logo/UsTechLogo2.svg'} alt="logo" width={200} height={80} />

                    <div className='flex gap-4 mt-3'>
                        <Link href="https://www.linkedin.com/company/68655987/" className='footer-icons'>
                            <Image src={'/assets/footer/linkedin.svg'} alt="twitter" width={20} height={20} />
                        </Link>
                        <Link href="https://instagram.com" className='footer-icons'>
                            <Image src={'/assets/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                        </Link>
                    </div>
                </div>

                {/* COLUMN-2/3 */}
                {products.map((product) => (
                    <div key={product.id} className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                        <ul>
                            {product.link.map((link, index) => (
                                <li key={index} className='mb-5'>
                                    <Link href={link.href} className="text-white text-sm font-normal mb-6 space-links">
                                        {link.text}
                                    </Link>

                                    {/* If the link has a submenu, display submenu */}
                                    {link.submenu && (
                                        <ul className="ml-4 mt-2 bg-darkblue p-4 rounded-md hidden group-hover:block">
                                            {link.submenu.map((submenuItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link href="/" className="text-gray-400 text-sm hover:text-gray-300">
                                                        {submenuItem}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* COLUMN-4 */}
                <div className='col-span-4 md:col-span-4 lg:col-span-4'>
                    <div className="flex gap-2">
                        <Image src={'/assets/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                        <h5 className="text-base font-normal text-offwhite">US Tech Lightning Solutions</h5>
                    </div>
                    <div className="flex gap-2 mt-10">
                        <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                        <a href="tel:+18723307051" className="text-base font-normal text-offwhite hover:underline">+1 (872)330-7051</a>
                    </div>
                    <div className="flex gap-2 mt-10">
                        <Image src={'/assets/footer/email.svg'} alt="email-icon" width={24} height={24} />
                        <a href="mailto:support@ustechlightningsolutions.com" className="text-base font-normal text-offwhite hover:underline">support@ustechlightningsolutions.com</a>
                    </div>
                </div>

            </div>

            {/* All Rights Reserved */}
            <div className='py-10 lg:flex items-center justify-between border-t border-t-bordertop'>
                <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'><Link href="https://ustechlightningsolutions.com" target="_blank"> US Tech Lightning Solutions </Link>@  All Rights Reserved - 2025</h4>
                 <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                    <h4 className='text-offwhite text-sm font-normal'><Link href="https://www.privacypolicies.com/live/58790700-bc67-4b3c-a7f5-556eef19003d" target="_blank">Privacy Policy</Link></h4>
                    {/*<div className="h-5 bg-bordertop w-0.5"></div>
                    <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>*/}
                </div> 
            </div>

        </div>
    </div>
)
}

export default Footer;

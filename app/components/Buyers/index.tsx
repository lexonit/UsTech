import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    percent: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/ourbuyers.svg',
        percent: '15+',
        heading: "partners",
        subheading: "",
    },
    {
        imgSrc: '/assets/buyers/projectcompleted.svg',
        percent: '18+',
        heading: "projects",
        subheading: "",
    },
    {
        imgSrc: '/assets/buyers/happybuyers.svg',
        percent: '100% ',
        heading: "Happy Customers",
        subheading: "",
    },
    {
        imgSrc: '/assets/buyers/teammembers.svg',
        percent: '50+',
        heading: "Team members",
        subheading: "",
    }

]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                            <Image className='flex justify-center border border-border  p-2 w-10 rounded-lg' src={items.imgSrc} alt={items.imgSrc} width={30} height={30} />
                        <h2 className='text-4xl lg:text-6xl text-black font-semibold text-center mt-5'>{items.percent}</h2>
                        <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buyers;

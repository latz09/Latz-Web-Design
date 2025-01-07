import { MainHeading } from '../utils/Typography';
import Image from 'next/image';

const AboutCta = ({ image, cta }) => {
    return (
        <div className='relative h-[70vh] lg:h-screen w-full mt-12 lg:mt-24'>
            {/* Background Image */}
            <Image
                src={image}
                alt='Background'
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
               
                className='z-0 shadow-xl shadow-primary/30'
            />

            {/* Dark overlay */}
            <div className='absolute inset-0  z-10'></div>

            {/* Scrollable Content */}
            <div className='absolute inset-0 overflow-y-auto z-20 flex flex-col items-center justify-end lg:justify-center pb-12 lg:pb-0'>
                {/* Add your scrollable content here */}
                <div className='px-8 py-4 max-w-4xl text-center rounded-full bg-tertiary/80'>
                    <MainHeading title={cta} theme='text-light' />
                
                    
                </div>
            </div>
        </div>
    );
};

export default AboutCta;
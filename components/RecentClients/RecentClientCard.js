import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';

const RecentClientCard = ({ data }) => {
  const {
    websiteImageUrl,
    clientLogoUrl,
    companyName,
    companyUrl,
    websiteDescription,
  } = data;

  return (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative w-full h-64 lg:h-80 overflow-hidden transform transition-all duration-700 shadow-lg hover:scale-95 shadow-dark hover:shdow-primary/50 rounded-sm "
    >
      <div className="relative w-full h-full">
        <Image
          src={websiteImageUrl}
          alt={`${companyName} Website`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-sm"
        />
        <div className="absolute inset-0 bg-dark/70 transition-colors duration-500 ease-in-out group-hover:bg-dark/30 flex flex-col justify-end text-light ">
          <div className="flex flex-col bg-dark/5 px-6 pt-4 transition-colors duration-500 ease-in-out group-hover:bg-dark/100">
            <h3 className="text-lg lg:text-2xl font-bold">{companyName}</h3>
            <div className="text-sm lg:text-base">{websiteDescription}</div>
            <div className="text-sm lg:text-base place-self-end py-3 lg:py-2 lg:font-black tracking-wider flex items-center">
              <span>Visit Site</span>
              <FaLongArrowAltRight className="inline-block text-tertiary ml-2 transform transition-transform duration-500 ease-in-out group-hover:translate-x-2 text-lg lg:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RecentClientCard;

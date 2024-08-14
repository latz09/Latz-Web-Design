import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import AnimateUp from '../utils/animations/AnimateUp';

const RecentClientCard = ({ data }) => {
  const { websiteImageUrl, companyName, companyUrl, websiteDescription } = data;

  return (
    <AnimateUp>
      <a
        href={companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm lg:text-base lg:font-semibold flex items-center"
      >
        <div className="group grid gap-4 relative w-full h-auto overflow-hidden transform transition-all duration-700 rounded-sm">
          {/* Header Section */}
          <div className="flex justify-between items-center py-3 bg-dark text-light border-b border-primary mx-4">
            <h3 className="text-xl font-bold text-tertiary md:text-light md:group-hover:text-tertiary">{companyName}</h3>
            <div>
              <span className="font-bold">Visit Site</span>
              <FaLongArrowAltRight className="inline-block text-primary ml-2 transform transition-transform duration-500 ease-in-out group-hover:translate-x-2 text-lg lg:text-2xl" />
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-80 md:group-hover:scale-95 transition duration-700">
            <Image
              src={websiteImageUrl}
              alt={`${companyName} Website`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="lg:rounded-xl"
            />
            {/* Description Section on the Image */}
            <div className="absolute bottom-0 left-0 right-0 bg-dark/80 text-light text-center p-4 transition duration-1000 md:group-hover:bg-dark">
              <p className="italic text-base lg:text-lg md:group-hover:font-bol font-normal ">
                {websiteDescription}
              </p>
            </div>
          </div>
        </div>
      </a>
    </AnimateUp>
  );
};

export default RecentClientCard;
export const revalidate = 10;

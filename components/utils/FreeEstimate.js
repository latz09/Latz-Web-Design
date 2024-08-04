import { FaLongArrowAltRight } from 'react-icons/fa';

const FreeEstimate = () => {
  return (
    <div className="flex items-center gap-4 text-light lg:text-xl uppercase group cursor-pointer">
      <span>Get Started Now</span>

      <span className="bg-tertiary p-2 rounded-full transform group-hover:translate-x-2 transition-transform  duration-500 group-hover:bg-primary text-dark group-hover:text-light">
        <FaLongArrowAltRight className=" text-lg lg:text-2xl" />
      </span>
    </div>
  );
};

export default FreeEstimate;

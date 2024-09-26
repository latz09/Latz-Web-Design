import { AutomationDescription, MainHeading, TopHeading } from '@/components/utils/Typography';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { GiCheckMark } from "react-icons/gi";
import { ImCheckmark } from "react-icons/im";



const CheckList = ({ data }) => {
	
	return (
		<div className='p-6 lg:p-24 grid place-items-center  '>
			<ul className='grid gap-8'>
				{data.map((item, index) => (
					<li key={index} className="flex items-center gap-8">
                        <div className="p-2 bg-dark rounded-full shadow-lg">
						<ImCheckmark className='text-4xl text-tertiary ' /></div>
						<div className="grid gap-1 ">
							
                            <TopHeading title={item.title} />
                            <div className="font-bold opacity-80">
							<AutomationDescription description={item.description} /></div>
                            
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CheckList;

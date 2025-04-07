import AnimateUp, { FadeIn } from '../utils/animations/AnimateUp';
import AnimateUpWithBounce from '../utils/animations/AnimateUpWithBounce';
import DelayAnimateUp from '../utils/animations/DelayAnimateUp';
import SlideIn from '../utils/animations/SlideIn';
import { TopHeading } from '../utils/Typography';
import ContactForm from './ContactForm';
import ContactFormIntro from './ContactFormIntro';

const ContactFormContainer = ({ toggleModal }) => {
	return (
		<div className='bg- to-dark pt-8 pb-32'>
			<div className=' max-w-[90rem] mx-auto grid  lg:grid-cols-2 gap-2 lg:gap-2 place-items-center '>
				<div className='p-3 lg:space-y-8 grid place-items-start'>
					<ContactFormIntro />
					<div className='hidden lg:grid '>
						<FadeIn>
							<Contacts />
						</FadeIn>
					</div>
				</div>

				<AnimateUp className='lg:w-5/6 w-full px-4 lg:px-0'>
					<ContactForm toggleModal={toggleModal} />
				</AnimateUp>
				<div className='lg:hidden mt-8 text-center grid place-items-center '>
					<Contacts />
				</div>
			</div>
		</div>
	);
};

export default ContactFormContainer;

const Contacts = () => {
	return (
		<div className="space-y-4">
			<TopHeading title='Prefer to reach out directly?' />
			<div className='text-dark  grid gap-3 text-lg lg:text-xl '>
				<div>
					<a
						href='mailto:jordan@latzwebdesign.com'
						className='mb-2  hover:font-bold transition duration-300 tracking-wide'
					>
						<span>Email:</span>
						<span> Jordan@LatzWebDesign.com</span>
					</a>
				</div>
				<div>
					<a
						href='tel:7156305689'
						className='tracking-wide  hover:font-bold transition duration-300'
					>
						<span>Call/Text:</span>
						<span> (715) 630-5689</span>
					</a>
				</div>
			</div>
		</div>
	);
};

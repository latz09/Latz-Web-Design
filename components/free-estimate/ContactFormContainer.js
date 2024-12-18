import AnimateUp from '../utils/animations/AnimateUp';
import AnimateUpWithBounce from '../utils/animations/AnimateUpWithBounce';
import DelayAnimateUp from '../utils/animations/DelayAnimateUp';
import SlideIn from '../utils/animations/SlideIn';
import ContactForm from './ContactForm';
import ContactFormIntro from './ContactFormIntro';

const ContactFormContainer = ({ toggleModal }) => {
	return (
		<div className='bg- to-dark pt-8 pb-32'>
			<div className=' max-w-7xl mx-auto grid  lg:grid-cols-2 gap-8 lg:gap-2 place-items-center '>
				<div className='p-6 space-y-8 grid place-items-start'>
					<ContactFormIntro />
					<div className='hidden lg:grid '>
						<AnimateUpWithBounce>
						<Contacts /></AnimateUpWithBounce>
					</div>
				</div>

				<DelayAnimateUp className='lg:w-5/6 w-full px-4 lg:px-0'>
					<ContactForm toggleModal={toggleModal} />
				</DelayAnimateUp>
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
		<div className='text-dark  grid gap-5 '>
			<div>
				<a
					href='mailto:jordan@latzwebdesign.com'
					className='underline underline-offset-8 mb-4 hover:text-primary hover:font-bold transition duration-300'
				>
					jordan@latzwebdesign.com
				</a>
			</div>
			<div>
				<a href='tel:7156305689' className='underline underline-offset-8 hover:text-primary hover:font-bold transition duration-300'>
					(715) 630-5689
				</a>
			</div>
		</div>
	);
};

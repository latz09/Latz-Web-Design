import AnimateUp from '../utils/animations/AnimateUp';
import DelayAnimateUp from '../utils/animations/DelayAnimateUp';
import SlideIn from '../utils/animations/SlideIn';
import ContactForm from './ContactForm';
import ContactFormIntro from './ContactFormIntro';

const ContactFormContainer = ({ toggleModal }) => {
	return (
		<div className='bg-gradient-to-b from-dark via-dark/90 to-dark pt-8 pb-32'>
			<div className=' max-w-7xl mx-auto grid  lg:grid-cols-2 gap-8 lg:gap-2 place-items-center '>
				<div className='p-6 space-y-8 grid place-items-start'>
					<ContactFormIntro />
					<div className='hidden lg:grid '>
						<Contacts />
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
		<div className='text-tertiary  grid gap-5 '>
			<div>
				<a
					href='mailto:jordan@latzwebdesign.com'
					className='underline underline-offset-8 mb-4'
				>
					jordan@latzwebdesign.com
				</a>
			</div>
			<div>
				<a href='tel:7156305689' className='underline underline-offset-8'>
					(715) 630-5689
				</a>
			</div>
		</div>
	);
};

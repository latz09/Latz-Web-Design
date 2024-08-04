import AnimateUp from '../utils/animations/AnimateUp';
import SlideIn from '../utils/animations/SlideIn';
import ContactForm from './ContactForm';
import ContactFormIntro from './ContactFormIntro';

const ContactFormContainer = ({ toggleModal }) => {
	return (
		<div className='bg-gradient-to-b from-dark via-dark/90 to-dark pt-8 pb-32'>
			<div className=' max-w-7xl mx-auto grid  lg:grid-cols-2 gap-8 lg:gap-2 place-items-center '>
				<ContactFormIntro />

				<AnimateUp className='lg:w-5/6 w-full px-4 lg:px-0'>
					<ContactForm toggleModal={toggleModal} />
				</AnimateUp>
			</div>
		</div>
	);
};

export default ContactFormContainer;

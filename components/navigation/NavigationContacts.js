import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const NavigationContacts = () => {
	return (
		<div className='grid place-items-start lg:place-items-end'>
			<div className='text-dark text-lg lg:space-y-16'>
				<div className='text-primary  grid gap-1'>
					<a
						href='mailto:jordan@latzwebdesign.com'
						className='underline underline-offset-8 mb-4'
					>
						jordan@latzwebdesign.com
					</a>

					<a href='tel:7156305689' className='underline underline-offset-8 decoration-tertiary/60'>
						(715) 630-5689
					</a>
				</div>

				<div className="hidden lg:block text-light/80">
					<SocialMediaLinks />
				</div>
			</div>
		</div>
	);
};

export default NavigationContacts;

export const SocialMediaLinks = () => {
	return (
		<div className='flex   text-3xl justify-between mt-4 text-dark'>
			<a
				href='https://www.linkedin.com/in/jordan-latz-0b6b0b1b5/'
				target='_blank'
				rel='noreferrer'
			>
				<FaLinkedinIn />
			</a>
			<a href=' ' target='_blank' rel='noreferrer'>
				<FaInstagram />
			</a>

			<a href=' ' target='_blank' rel='noreferrer'>
				<FaFacebookF />
			</a>
			<a href=' ' target='_blank' rel='noreferrer'>
				<FaGithub />
			</a>
		</div>
	);
};

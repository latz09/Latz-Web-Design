import { Description, MainHeading } from "@/components/utils/Typography";

const CmsIntro = ({ title, successStory }) => {
	return (
		<div className='max-w-4xl mx-auto grid place-items-center gap-4 px-8 lg:px-0'>
			<MainHeading title={title} />

			<Description
				description={successStory}
				theme='text-light text-center'
			/>
		</div>
	);
};

export default CmsIntro;

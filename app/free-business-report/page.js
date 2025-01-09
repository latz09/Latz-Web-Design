
import { fetchData } from '@/lib/sanity/sanityFetch';
import { FETCH_BUSINESS_SNAPSHOT_REPORT_DATA as query } from '@/data/queries/snapshotReport/FETCH_BUSINESS_SNAPSHOT_REPORT_DATA';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlineComment, AiOutlineRise } from 'react-icons/ai';
import { MdSpeed } from 'react-icons/md';
import { HiOutlineUserGroup } from 'react-icons/hi';
import PageContainer from '@/components/utils/animations/PageContainer';
import {
	Description,
	MainHeading,
	TopHeading,
} from '@/components/utils/Typography';
import SnapshotFormRequest from '@/components/snapshot-report/SnapshotFormRequest';

const FreeBusinessReport = async () => {
	const data = await fetchData(query);

	return (
		<PageContainer className='bg-light'>
			<div>
				<div >
					<ReportHeading
						headline={data.headline}
						subheadline={data.subheadline}
						image={data.imageUrl}
					/>
					<ReportDetails
						scrollNote={data.scrollNote}
						snapshotDetails={data.snapshotDetails}
					/>
					<div className="py-16 lg:py-24 space-y-8 lg:space-y-16 border-b border-primary/20 w-5/6 lg:w-2/3 mx-auto">
						<MainHeading
							title={data.headline}
							theme='text-center text-dark'
						/>

						<div className=' w-full max-w-2xl mx-auto border-b border-dark/20'>
							<SnapshotFormRequest />
						</div>
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default FreeBusinessReport;
export const revalidate = 10;

const ReportHeading = ({ headline, subheadline, image }) => {
	return (
		<div className='py-16 lg:py-32 2xl:py-44 max-w-7xl mx-auto grid lg:grid-cols-2 place-items-center  gap-8 lg:gap-24 bg-gradient-to-l from-light via-primary/10 to-light'>
			<div className='space-y-4'>
				<MainHeading title={headline} theme='text-center text-primary px-2' />

				<TopHeading title={subheadline} theme='text-center text-dark' />
				<Description
					description='*Scroll down to See the Details'
					theme='text-center text-dark/60 italic '
				/>
			</div>
			<div className=' w-5/6 lg:w-full'>
				<SnapshotFormRequest />
			</div>
		</div>
	);
};

const ReportDetails = ({ scrollNote, snapshotDetails }) => {

	return (
		<div className='space-y-12 bg-gradient-to-l from-dark via-dark/80 to-dark py-24 '>
			<MainHeading title={`${scrollNote}:`} theme={'text-center text-light px-2'} />

			<div className='max-w-7xl mx-auto grid place-items-center lg:grid-cols-2 gap-6 text-dark'>
				{snapshotDetails.map((detail, index) => {
					let IconComponent;

					// Match the icon string to the corresponding imported icon
					switch (detail.icon) {
						case 'FaMapMarkedAlt':
							IconComponent = FaMapMarkedAlt;
							break;
						case 'AiOutlineComment':
							IconComponent = AiOutlineComment;
							break;
						case 'MdSpeed':
							IconComponent = MdSpeed;
							break;
						case 'AiOutlineRise':
							IconComponent = AiOutlineRise;
							break;
						case 'HiOutlineUserGroup':
							IconComponent = HiOutlineUserGroup;
							break;
						default:
							IconComponent = null; // Fallback if no icon is provided
					}

					return (
						<div
							key={index}
							className={`flex flex-col justify-between p-8 space-y-4 ${
								index === snapshotDetails.length - 1
									? 'col-span-full w-full lg:w-1/2 mx-auto'
									: ''
							}`}
						>
							{/* Render Icon */}
							{IconComponent && (
								<div className='flex justify-center mb-4'>
									<div className='bg-tertiary p-4 rounded-full shadow-lg shadow-tertiary/40'>
										<IconComponent className='text-5xl text-dark' />
									</div>
								</div>
							)}

							{/* Title */}
							<MainHeading
								title={detail.title}
								theme='text-center text-light'
							/>

							{/* Description */}
							<Description
								description={
									<>
										<span className='text-tertiary'>Why It Matters:</span>{' '}
										<span className='text-light'>{detail.whyItMatters}</span>
									</>
								}
								theme='text-center h-full'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};



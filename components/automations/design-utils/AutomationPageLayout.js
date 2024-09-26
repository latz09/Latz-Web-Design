import Image from "next/image";

export const AutomationPageLayout = ({ children, landingImage }) => {
	return (
		<div>
        
			<div className='max-w-7xl mx-auto '>{children}</div>
		</div>
	);
};

import Image from "next/image";

export const AutomationPageLayout = ({ children, landingImage }) => {
	return (
		<div className="scroll-mt-36 lg:scroll-mt-44" >
        
			<div className='max-w-7xl mx-auto '>{children}</div>
		</div>
	);
};

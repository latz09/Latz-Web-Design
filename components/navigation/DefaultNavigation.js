import NavigationLogo from "./NavigationLogo";

const DefaultNavigation = () => {
	return (
		<div className="fixed top-0 left-0 w-full z-50 bg-dark text-light h-[15vh] py-8 px-8 ">
			<div
				className={`w-full h-full flex justify-between items-center`}
			>
				<NavigationLogo />
				<div>menu</div>
			</div>
		</div>
	);
};

export default DefaultNavigation;
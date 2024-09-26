export const MainHeading = ({ title, theme }) => {
	return <h1 className={`text-3xl lg:text-5xl font-black ${theme}`}>{title}</h1>;
};

export const TopHeading = ({ title, theme }) => {
	return <h2 className={`text-lg lg:text-xl font-bold ${theme}`}>{title}</h2>;
};

export const Description = ({ description, theme }) => {
	return <p className={`text-lg lg:text-xl leading-8 lg:leading-9 ${theme}`}>{description}</p>;
};


export const AutomationDescription = ({ description, theme }) => {
	return <p className={` lg:text-[1.18rem] opacity-90 leading-7 lg:leading-8 ${theme}`}>{description}</p>;
}
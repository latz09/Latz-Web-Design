import React from 'react';
import { BsMegaphoneFill, BsFillRocketTakeoffFill } from 'react-icons/bs';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

// Mapping icon names to their corresponding components
const iconMap = {
	megaphone: BsMegaphoneFill,
	rocket: BsFillRocketTakeoffFill,
	envelope: FaEnvelopeOpenText,
	map: FaMapLocationDot,
};

const AutomationIcon = ({
	name,
	size = 24,
	color = 'text-current',
	background = 'bg-transparent',
}) => {
	// Get the icon component from the iconMap based on the provided 'name' prop
	const IconComponent = iconMap[name];

	// Return the icon component if it exists, otherwise return null
	return IconComponent ? (
		<div
			className={`rounded-full shadow-md text-2xl p-3 grid place-items-center ${background} flex-shrink-0`}
			style={{ width: size * 2, height: size * 2 }}
		>
			<IconComponent size={size} className={color} />
		</div>
	) : null;
};

export default AutomationIcon;

'use client';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';

const allIcons = { ...MdIcons, ...FaIcons, ...HiIcons };

const IconRenderer = ({ icon, className = 'text-2xl text-primary' }) => {
  const Icon = allIcons[icon] || MdIcons.MdStore;
  return <Icon className={className} />;
};

export default IconRenderer;

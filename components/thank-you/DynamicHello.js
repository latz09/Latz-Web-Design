

'use client';

import { useSearchParams } from 'next/navigation';
import { Description, TopHeading } from '../utils/Typography';

const DynamicHello = () => {
    const searchParams = useSearchParams();
	const name = searchParams.get('name') || 'there';

    return (
        <div className="text-center text-light">
            <h1 className="text-4xl font-bold mb-4 text-tertiary" >Thank You, {name}!</h1>
          <div className="grid gap-2">
            <TopHeading title='We appreciate you reaching out. We will get back to you shortly'  />
            <Description description="In the meantime, feel free to look around our site." /></div>  
        </div>
    );
};

export default DynamicHello;

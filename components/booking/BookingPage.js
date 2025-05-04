'use client';

import { useState } from 'react';
import Cal from '@calcom/embed-react';

const bookingOptions = [
  {
    label: '📞 Strategy Call',
    calLink: 'latz-web-design/website-strategy-call-with-jordan',
  },
  {
    label: '🎥 Video Consultation (Google Meet)',
    calLink: 'latz-web-design/website-consultation-google-meet-with-jordan',
  },
  {
    label: '🤝 In-Person Planning Meeting',
    calLink: 'latz-web-design/in-person-website-planning-meeting-with-jordan',
  },
];

export default function BookingPage() {
  const [selected, setSelected] = useState(bookingOptions[0]);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Time</h1>

      <div className="flex justify-center gap-2 mb-8 flex-wrap text-light">
        {bookingOptions.map((option) => (
          <button
            key={option.calLink}
            onClick={() => setSelected(option)}
            className={`px-4 py-2 rounded border font-medium transition ${
              selected.calLink === option.calLink
                ? 'bg-dark text-light border-light/30'
                : 'bg-light text-dark border-light/30 hover:border-dark'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <Cal calLink={selected.calLink} />
    </div>
  );
}

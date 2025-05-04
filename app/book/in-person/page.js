'use client';
import BookingToggle from '@/components/booking/BookingToggle';
import Cal from '@calcom/embed-react';

export default function InPersonMeetingPage() {
  return (
    <div className="px-4 py-16 max-w-7xl mx-auto h-[200vh]">
      <h1 className="text-3xl font-bold mb-6 text-center">🤝 In-Person Website Meeting</h1>
      <BookingToggle />
      <Cal calLink="latz-web-design/in-person-website-planning-meeting-with-jordan" />
    </div>
  );
}

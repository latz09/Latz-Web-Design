'use client';
import BookingToggle from '@/components/booking/BookingToggle';
import Cal from '@calcom/embed-react';

export default function VideoConsultPage() {
  return (
    <div className="px-4 py-16 max-w-7xl mx-auto h-[200vh]">
      <h1 className="text-3xl font-bold mb-6 text-center">🎥 Website Video Call (Google Meet)</h1>
      <BookingToggle />
      <Cal calLink="latz-web-design/website-consultation-google-meet-with-jordan" />
    </div>
  );
}
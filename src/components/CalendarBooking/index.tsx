import React, { useEffect } from 'react';

export default function CalendarBooking() {
  useEffect(() => {
    // Scroll to top when component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Schedule a 30-Minute FREE Consultation</h2>
        <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Initial security assessment discussion</li>
              <li>Service overview and recommendations</li>
              <li>Custom solution planning</li>
              <li>Pricing and timeline discussion</li>
            </ul>
          </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Google Calendar integration */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg overflow-auto" style={{ height: '1000px' }}>
            <iframe
              src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0oBFC1gM2R3POHtOFSZSy4HyZc2GSx8FocFDPYZx9Kdz7mURwVBzgetcWbGbDdWGt3zPQ78uZl?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="1000px"
              frameBorder="0"
              scrolling="yes"
              allowFullScreen
            ></iframe>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

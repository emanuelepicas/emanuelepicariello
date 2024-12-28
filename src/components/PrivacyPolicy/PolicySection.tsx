import React from 'react';

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="text-gray-600 space-y-4">
        {children}
      </div>
    </section>
  );
}
'use client';
import TwoColumnLayout from './TwoColumnLayout';
import { BarChart3 } from 'lucide-react';

export default function WatchHistory() {
  return (
    <TwoColumnLayout
      title="What is YouTube Watch History?"
      content="Your YouTube watch history is a comprehensive timeline of every video you've ever watched. This data powers content suggestions, personalization algorithms, and behavioral profiling that shapes your entire YouTube experience."
      icon={BarChart3}
    />
  );
}

'use client';
import TwoColumnLayout from './TwoColumnLayout';
import { Globe } from 'lucide-react';

export default function GoogleUsage() {
  return (
    <TwoColumnLayout
      title="How Google Uses Your Data"
      content="Google collects and analyzes your YouTube watch history to build detailed user profiles. This data is used for targeted advertising, content recommendations, and machine learning algorithms that influence what you see across the entire Google ecosystem."
      icon={Globe}
      reverse={true}
    />
  );
}

'use client';
import TwoColumnLayout from './TwoColumnLayout';
import { Vote } from 'lucide-react';

export default function RedDotDAO() {
  return (
    <TwoColumnLayout
      title="Join RedDotDAO Community"
      content="RedDotDAO is a decentralized community that empowers users to reclaim their data sovereignty. Through blockchain technology, we create a transparent ecosystem where users own their data, earn rewards for contributions, and participate in governance decisions that shape the future of digital privacy."
      icon={Vote}
      reverse={true}
    />
  );
}

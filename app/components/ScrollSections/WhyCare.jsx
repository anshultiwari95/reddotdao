'use client';
import TwoColumnLayout from './TwoColumnLayout';
import { DollarSign } from 'lucide-react';

export default function WhyCare() {
  return (
    <TwoColumnLayout
      title="Why Data Sovereignty Matters"
      content="Your digital footprint is worth billions to tech companies, but you receive nothing in return. By reclaiming your data sovereignty, you can control your privacy, earn from your contributions, and participate in a decentralized ecosystem that values individual rights over corporate profits."
      icon={DollarSign}
    />
  );
}

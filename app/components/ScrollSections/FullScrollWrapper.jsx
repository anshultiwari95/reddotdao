'use client';

import GoogleUsage from "./GoogleUsage";
import RedDotDAO from "./RedDotDAO";
import WatchHistory from "./WatchHistory";
import WhyCare from "./WhyCare";



export default function FullScrollWrapper() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <WatchHistory/>
      <GoogleUsage/>
      <WhyCare/>
      <RedDotDAO />
    </div>
  );
}

'use client';

import GoogleUsage from "./GoogleUsage";
import RedDotDAO from "./RedDotDAO";
import WatchHistory from "./WatchHistory";
import WhyCare from "./WhyCare";

export default function FullScrollWrapper() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory smooth-scroll-container">
      <div className="full-screen-section">
        <WatchHistory/>
      </div>
      <div className="full-screen-section">
        <GoogleUsage/>
      </div>
      <div className="full-screen-section">
        <WhyCare/>
      </div>
      <div className="full-screen-section">
        <RedDotDAO />
      </div>
    </div>
  );
}

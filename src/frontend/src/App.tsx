import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import GratitudePage from './pages/GratitudePage';
import ReplyPage from './pages/ReplyPage';
import FarewellPage from './pages/FarewellPage';
import RomanticNotificationOverlay from './components/RomanticNotificationOverlay';

function App() {
  const [showGratitude, setShowGratitude] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [showFarewell, setShowFarewell] = useState(false);

  const handleYesClick = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
    setShowGratitude(true);
  };

  const handleNextClick = () => {
    setShowGratitude(false);
    setShowReply(true);
  };

  const handleReplyNextClick = () => {
    setShowReply(false);
    setShowFarewell(true);
  };

  return (
    <div className="min-h-screen">
      {!showGratitude && !showOverlay && !showReply && !showFarewell ? (
        <LandingPage onYesClick={handleYesClick} />
      ) : showOverlay ? (
        <RomanticNotificationOverlay onClose={handleOverlayClose} />
      ) : showFarewell ? (
        <FarewellPage />
      ) : showReply ? (
        <ReplyPage onNextClick={handleReplyNextClick} />
      ) : (
        <GratitudePage onNextClick={handleNextClick} />
      )}
    </div>
  );
}

export default App;

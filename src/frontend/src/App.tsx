import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import GratitudePage from './pages/GratitudePage';

function App() {
  const [showGratitude, setShowGratitude] = useState(false);

  const handleYesClick = () => {
    setShowGratitude(true);
  };

  return (
    <div className="min-h-screen valentine-gradient">
      {!showGratitude ? (
        <LandingPage onYesClick={handleYesClick} />
      ) : (
        <GratitudePage />
      )}
    </div>
  );
}

export default App;

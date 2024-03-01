import Card from './components/Card';
import './App.css'
import { useState } from 'react';
import Confirmation from './components/Confirmation';
function App() {
  const [isSubscribed, setIsSubscribed] = useState(true)
  return (
    <div
      style={{
        backgroundColor: "hsl(235, 18%, 26%)",
        fontFamily:'CustomFont'
      }}
      className="w-100 h-100 row"
    >
      {isSubscribed ? <Confirmation /> : <Card setIsSubscribed={setIsSubscribed}/>}
    </div>
  );
}

export default App

import SegmentForm from "./components/SegmentForm.jsx";
import { useState } from "react";

function App() {
const [view, setView] = useState(false)

const handleClick = async(e)=>{

      setView(!view)
}

  return (
    <div className="flex h-screen">
    <div className={`flex items-center justify-center w-1/2`}>
      <button 
        className="hover:bg-blue-100 text-black font-bold py-2 px-4 border border-blue-500 rounded"
        onClick={handleClick}
      >
        Save Segment
      </button>
    </div>
    {view && <SegmentForm />}
  </div>
  );
}

export default App;

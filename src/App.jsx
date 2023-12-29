import SegmentForm from "./components/SegmentForm.jsx";
import { useState } from "react";
import viewContext from "./context.js";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [view, setView] = useState(false)

const handleClick = async(e)=>{

      setView(!view)
}

  return (
    <div className="flex h-screen">
      <ToastContainer />
    <div className={`flex items-center justify-center w-1/2`}>
      <button 
        className="hover:bg-blue-100 text-black font-bold py-2 px-4 border border-blue-500 rounded"
        onClick={handleClick}
      >
        Save Segment
      </button>
    </div>
    {view &&( <viewContext.Provider value={{view,setView}}>
      <SegmentForm />
    </viewContext.Provider>)
    }
  </div>
  );
}

export default App;

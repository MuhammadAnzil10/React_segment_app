import SegmentHeader from "./SegementHeader.jsx";
import { segmentLists } from "../constants.js";
import { useState } from "react";
import SelectOptions from "./SelectOptions.jsx";
const SegmentForm = () => {
  const [segmentOptions, setSegmentOptions] = useState(segmentLists);
  const [selectedSchema, setSelectedSchema] = useState({});
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  
  const handlChange = async (e) => {
    const selectedLabel = e.target.options[e.target.selectedIndex].id;
    setSelectedSchema({ [e.target.value]: selectedLabel });
  };

  const isEqual = (obj1, obj2) => {
    let [key1] = Object.keys(obj2);

    if (key1 === obj1.value) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    if (!selectedSchema) {
      return prompt("Please Select Options");
    }
    setSelectedSchemas([...selectedSchemas, selectedSchema]);
    setSegmentOptions(
      segmentOptions.filter((schema) => !isEqual(schema, selectedSchema))
    );
    setSelectedSchema("");
  };




  return (
    <div className="fixed top-0 right-0 h-screen w-1/2  bg-white p-4 shadow-lg overflow-y-auto">
      <SegmentHeader />
      <form>
        <div className="mb-4 mx-5">
          <label
            htmlFor="segmentName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter the name of the segment
          </label>
          <input
            type="text"
            id="segmentName"
            name="segmentName"
            className="border border-gray-300 rounded py-2 px-4  w-full"
            placeholder="Name of the segment"
          />
        </div>
        <div className="ml-6 my-10">
          <p className="text-black-500 text-sm mt-1 font-bold">
            To save your segment, you need to add the schemas to build the query
          </p>
        </div>
        <div className="flex justify-end">
          <div className="flex">
            <span className="bg-green-500 h-3 w-3 rounded-full mr-1 mt-2"></span>
            <p>- User Traits</p>
          </div>
          <div className="flex ml-4">
            <span className="bg-red-500 h-3 w-3 rounded-full mr-1 mt-2"></span>
            <p>- Group Traits</p>
          </div>
        </div>

        <div className="mt-8 ml-6 border border-blue-300">
          {selectedSchemas.length > 0 &&
            selectedSchemas.map((schema, index) => {
              return (
                <SelectOptions
                  schema={schema}
                  key={index}
                  segments={segmentOptions}
                  setSegmentOptions={setSegmentOptions}
                  setSelectedSchemas={setSelectedSchemas}
                  selectedSchemas={selectedSchemas}
               
                />
              );
            })}
        </div>
        
        <div className="mt-8 ml-6 ">
          <select
            name=""
            id=""
            value={selectedSchema ? selectedSchema.value : selectedSchema}
            onChange={handlChange}
            className="block appearance-none bg-white border w-60 border-gray-300
            text-gray-700 py-2 px-4 pr-8 rounded 
            leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
          >
            <option value="">Add schema to segment</option>
            {segmentOptions.map((option, index) => {
              return (
                <option id={option.id} value={option.value} key={index}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex mt-6 ml-6">
          <span className="text-green-400 cursor-pointer">+</span>
          <p
            className="underline ml-1 text-green-400 cursor-pointer"
            onClick={handleSubmit}
          >
            Add new schema
          </p>
        </div>

        {/* <div className="flex gap-4 mt-auto">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Save the Segment
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Cancel
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default SegmentForm;

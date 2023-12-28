import { useState } from "react";

const SelectOptions = ({
  schema,
  segments,
  setSegmentOptions,
  selectedSchemas,
  setSelectedSchemas,

}) => {
  const [segmentOption, setSegmentOption] = useState(schema);
  const [key, value] = Object.entries(segmentOption).flat();
  const [keys,setKeys] = useState(key)
  const [values , setValues] = useState(value)

  const handleChange = async (e) => {
    const selectedLabel = e.target.options[e.target.selectedIndex].id;
    const newKey = e.target.value;
    const newValue = selectedLabel;
    const newSegments = segments.map((segment) => {

      if (segment.value === e.target.value) {
        return { value: key, label: value, id: value };
      }
      return segment;
    });
    const newSelectedSchemas = selectedSchemas.map((schema) => {
      if (Object.keys(schema).flat()[0] === key) {
        return { [newKey]: newValue };
      }
      return schema;
    });

    setSelectedSchemas(newSelectedSchemas);
    setSegmentOptions(newSegments);
    setKeys((prevKeys) => newKey);
    setValues((prevValues) => newValue);
    setSegmentOption({ [newKey]: newValue });
    

  };
  
  return (
    <select
      name=""
      id=""
      value={values}
      onChange={handleChange}
      className="block appearance-none bg-white mb-8 border w-60 border-gray-300
    text-gray-700 py-2 px-4 pr-8 rounded 
    leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
    >
    
     
      <option value={keys} key={-1}>{values}</option>
      {segments.length > 0 &&
        segments.map((segment, index) => {
          return (
            <option id={segment.id} value={segment.value} key={index}>
              {segment.label}
            </option>
          );
        })}
    </select>
  );
};

export default SelectOptions;

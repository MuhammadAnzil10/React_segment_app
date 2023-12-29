import { useContext } from "react";
import viewContext from "../context.js";
import { toast } from "react-toastify";

const Button = ({ selectedSchemas, segmentName }) => {
  const { view, setView } = useContext(viewContext);

  const handleSave = async (e) => {
    e.preventDefault();
    if (!selectedSchemas || !segmentName) {
      return toast.error("Please check segment name and schema");
    }
    try {
      await fetch("/api/88583004-a6c9-43b3-b301-e2fe72836c69", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          segment_name: segmentName,
          schema: selectedSchemas,
        }),
      });
      toast.success("Data Successfully added");
      setView(!view);
    } catch (error) {}
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    setView(!view);
  };

  return (
    <div className="flex gap-4 mt-10">
      <button
        className="bg-green-500 text-white py-2 px-4 rounded mt-4"
        onClick={handleSave}
      >
        Save the Segment
      </button>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded mt-4"
        onClick={handleCancel}
      >
        Cancel
      </button>
    </div>
  );
};

export default Button;

import { useState } from "react";
import Error from "./Error";

const Form = ({ setPatients }) => {
  const [petName, setPetName] = useState("");

  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const dateNow = Date.now().toString(36);

    return random + dateNow;
  };
  function handleSubmit(e) {
    e.preventDefault();
    //form validation
    if ([petName, ownerName, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const patientObj = {
      petName,
      ownerName,
      email,
      date,
      symptoms,
      id: generateId(),
    };

    setPatients((patients) => [...patients, patientObj]);

    //Reset form
    setPetName("");
    setOwnerName("");
    setEmail("");
    setDate("");
    setSymptoms("");
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Follow-up of patients</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add patients and{" "}
        <span className="text-indigo-600 font-bold">administer them</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error message="all fields are mandatory" />}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet's name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Your pet's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner's name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Your name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="discharge"
            className="block text-gray-700 uppercase font-bold"
          >
            Date of discharge
          </label>
          <input
            id="discharge"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            placeholder="Describe your pet's symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full 
          p-3 text-white uppercase font-bold 
          hover:bg-indigo-700 transition-colors cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Form;

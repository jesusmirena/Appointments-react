const Patient = ({ patient }) => {
  const { petName, ownerName, email, date, symptoms } = patient;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet's name: <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner's name:{" "}
        <span className="font-normal normal-case">{ownerName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date of discharge:{" "}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: <span className="font-normal normal-case">{symptoms}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
          Edit
        </button>
        <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;

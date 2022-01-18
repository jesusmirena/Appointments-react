const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet's name: <span className="font-normal normal-case">Rodolfo</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner's name: <span className="font-normal normal-case">Jesus</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">Jesusamh16@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date of discharge:{" "}
        <span className="font-normal normal-case">20/01/2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
          asperiores deleniti tempore, accusantium a temporibus quisquam
          explicabo quis itaque, unde alias culpa ullam dignissimos expedita!
          Minima ipsa nemo repellat excepturi.
        </span>
      </p>
    </div>
  );
};

export default Patient;

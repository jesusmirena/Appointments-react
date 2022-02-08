import Patient from "./Patient";

const PatientList = ({ patients }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Manage your{" "}
            <span className="text-indigo-600 font-bold">
              patients and appointments
            </span>
          </p>
          {patients.map((patient) => (
            <Patient key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            There are no patients
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            start by adding patients and{" "}
            <span className="text-indigo-600 font-bold">
              they will appear in this place
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;

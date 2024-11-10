import ProfessorItem from './ProfessorItem';

const appointments = [
  {
    tutorName: "Cruz Castillo Jhoan Antuni",
    times: ["Lunes 7:30 - 9:00", "Lunes 7:30 - 9:00", "Lunes 7:30 - 9:00"],
    modality: "Grupal"
  },
  {
    tutorName: "Cruz Castillo Jhoan Antuni",
    times: ["Lunes 7:30 - 9:00", "Lunes 7:30 - 9:00", "Lunes 7:30 - 9:00"],
    modality: "Individual"
  }
];
const Profesores = () => (
  <div className="flex flex-col gap-6 size:lg w-full" >
    {appointments.map((appointment, index) => (
      <ProfessorItem
        key={index}
        tutorName={appointment.tutorName}
        times={appointment.times}
        modality={appointment.modality}
      />
    ))}
  </div>
);

export default Profesores;

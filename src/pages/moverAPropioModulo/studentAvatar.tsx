import DefaultLayout from "@/layouts/default";

export default function StudentAvatar() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center min-h-screen bg-light-gray">
        <div className="border border-primary rounded-md p-6 w-64 bg-white shadow-md">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center text-primary font-bold text-center mb-4">
              AVATAR DEL ESTUDIANTE
            </div>
            <div className="text-center">
              <p className="text-primary font-semibold">Estudiante:</p>
              <p className="text-dark-gray">James Martinez</p>
              <p className="text-primary font-semibold mt-2">Código:</p>
              <p className="text-dark-gray">0202114005</p>
              <p className="text-primary font-semibold mt-2">Ciclo:</p>
              <p className="text-dark-gray">VIII</p>
            </div>
          </div>
          <div className="text-center">
            <button className="text-secondary font-medium">Cerrar Sesión</button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

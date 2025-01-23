import LogoutButton from "./LogoutButton";

const WorkingProgress = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Próximamente.</h1>
          <p className="text-lg">¡Estén atentos para ver algo sorprendente!</p>
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default WorkingProgress;

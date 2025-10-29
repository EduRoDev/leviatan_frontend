import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const CallAction = () => {
  const Navigate = useNavigate();

  const goToLogin = () => {
    Navigate("/login");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-10 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="w-full py-20 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-purple-400 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold">
              ¿Listo para Aprobar tus Exámenes?
            </h2>

            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Únete a miles de estudiantes que estudian de manera más
              inteligente, no más dura. Comienza hoy.
            </p>

            <div className="inline-block rounded-2xl">
              <Button
                onClick={goToLogin}
                size="lg"
                className="bg-white hover:bg-primary transition-colors duration-200 font-bold px-6 py-4 rounded-lg shadow-2xl hover:shadow-3xl text-lg relative overflow-hidden group"
              >
                <span className="relative z-10 text-primary group-hover:text-white">
                  Registrate ahora
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

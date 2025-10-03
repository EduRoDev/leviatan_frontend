import { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Enviroment } from "../../../utils/env/enviroment";

export function Statistics(){
    const { token } = useAuth();
    useEffect(() => {
        const fetchUserDataStatistics = async () => {
            try {
                const res = await fetch(`${Enviroment.API_URL}/statistics/user_statistics`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!res.ok) throw new Error("Error al obtener estadísticas");
                const data = await res.json();
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }

        const fetchUserProgressBySubject = async () => {
            try {
                const res = await fetch(`${Enviroment.API_URL}/statistics/subject/progress`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (!res.ok) throw new Error("Error al obtener progreso por materia");
                const data = await res.json();
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }

        if (token) {
            fetchUserDataStatistics();
            fetchUserProgressBySubject();
        }
    }, [token]);


    return (<div>
        hola estadisticas
    </div>);
}

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import type { Quiz } from "../../../../utils/interfaces/quiz.interface"
import { Enviroment } from "../../../../utils/env/enviroment"
import { useAuth } from "../../../../context/AuthContext"

export function Quiz(){
    const [quiz, setQuiz] = useState<Quiz[]>([])
    const documentId = Number(localStorage.getItem("documentId"))
    const { token } = useAuth();


    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await fetch(`${Enviroment.API_URL}/quiz/get_quiz/${documentId}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error("Error fetching quiz");
                }
                const quiz = await response.json();
                console.log("Quiz data:", quiz);
                setQuiz(quiz);
            } catch (error) {
                console.error("Error fetching quiz:", error);
            }
        }

        fetchQuiz();
    }, [documentId, token]);

    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1, y:0, transition:{duration:0.3}}}
            exit={{opacity:0}}
            className="w-full h-full flex justify-start items-center"
        >
            <motion.p initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>Quiz</motion.p>
        </motion.div>
    )
}
import { useAuthStore } from "../store/useAuthStore"
import { questions } from "../lib/questions.js"
export function QuizzScreen() {
    const { currentIndex, nextQuestion, currentAnswer, pickAnswer } = useAuthStore()



    if (!questions.length) return null

    const currentQuestion = questions[currentIndex]
    if (!currentQuestion) return null

    return (
        <section className="quizz-screen">
            <h1>{currentAnswer}</h1>
            <div className="question-box">
                <h2 className="question-text">{currentQuestion.question}</h2>
                <ul className="options-list">
                    {currentQuestion.options.map((option, idx) => (
                        <li className={currentAnswer == idx ? 'picked' : 'option'} key={idx} onClick={() => pickAnswer(idx)}>{option}</li>
                    ))}
                </ul>
                <button className="btn next-btn" onClick={nextQuestion}>Next</button>
            </div>
        </section>
    )
}

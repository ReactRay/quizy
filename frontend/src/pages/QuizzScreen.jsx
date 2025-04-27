import { useAuthStore } from "../store/useAuthStore"
export function QuizzScreen() {
    const { currentIndex, nextQuestion, currentAnswer, pickAnswer, questions, score } = useAuthStore()

    if (!questions.length) return null

    const currentQuestion = questions[currentIndex]
    if (!currentQuestion) return null

    return (
        <section className="quizz-screen">

            <div className="question-box">
                <h3>question {`${currentIndex + 1} out of ${questions.length}`}</h3>
                <h3>score: {score} / {questions.length}</h3>
                <h2 className="question-text">{currentQuestion.question}</h2>
                <div className="options-list">
                    {currentQuestion.options.map((option, idx) => {
                        const isPicked = currentAnswer === idx
                        const isCorrect = idx === currentQuestion.correctOption

                        let optionClass = 'option'
                        if (currentAnswer != null) {
                            optionClass += isCorrect ? ' correct' : isPicked ? ' wrong' : ''
                        }

                        return (
                            <button
                                key={idx}
                                className={optionClass}
                                disabled={currentAnswer != null}
                                onClick={() => pickAnswer(idx)}
                            >
                                {option}
                            </button>
                        )
                    })}
                </div>
                <button
                    disabled={currentAnswer == null}
                    className={`btn next-btn ${currentAnswer == null ? 'hide' : ''}`}
                    onClick={nextQuestion}
                >
                    Next
                </button>
            </div>
        </section>
    )
}

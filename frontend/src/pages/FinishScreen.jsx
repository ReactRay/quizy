import { useAuthStore } from "../store/useAuthStore"

export function FinishScreen() {
    const { resetQuiz, goHome, score, questions } = useAuthStore()

    return (
        <section className="finish-screen">
            <div className="finish-box">
                <h2 className="finish-title">🎉 Well Done! 🎉</h2>
                <p className="finish-msg">You've completed the quiz.</p>
                <p className="finish-msg">you got {score} out of {questions.length}</p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn restart-btn" onClick={resetQuiz}>Try Again</button>
                    <button className="btn restart-btn" onClick={goHome}>go home</button>
                </div>


            </div>
        </section>
    )
}

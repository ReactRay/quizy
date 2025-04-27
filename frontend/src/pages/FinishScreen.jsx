import { useAuthStore } from "../store/useAuthStore"

export function FinishScreen() {
    const { resetQuiz } = useAuthStore()

    return (
        <section className="finish-screen">
            <div className="finish-box">
                <h2 className="finish-title">🎉 Well Done! 🎉</h2>
                <p className="finish-msg">You've completed the quiz.</p>
                <button className="btn restart-btn" onClick={resetQuiz}>Try Again</button>
            </div>
        </section>
    )
}

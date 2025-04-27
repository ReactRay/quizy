
import { useAuthStore } from "../store/useAuthStore"
import { useState, useRef } from "react"
import { UserProfile } from "../cmps/UserProfile"
import Loader from '../cmps/Loader'
import { questions } from "../lib/questions"
import { QuizzScreen } from "./QuizzScreen"
import { FinishScreen } from "./FinishScreen"


export function MainIndex() {
    const { authUser, logout, fetchQuestions, isLoading, finishScreen } = useAuthStore()
    const [topic, setTopic] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        if (!topic.trim()) return
        await fetchQuestions({ topic })
        setTopic('')
    }

    if (isLoading) return <Loader />
    if (questions.length > 0 && !finishScreen) return <QuizzScreen />
    if (finishScreen) return <FinishScreen />

    return (
        <section className="main-page">
            <div className="container">
                <div className="profile-flex">
                    <UserProfile />
                    <button onClick={logout} className="btn">Logout</button>
                </div>

                <div className="welcome">
                    <h2>Welcome back, {authUser.name}!</h2>
                    <p>Ready to test your knowledge?</p>
                </div>

                <div className="guide-flex">
                    <div className="guide-item">
                        <p>Put your input down below</p>
                    </div>
                    <div className="guide-item">
                        <p>AI will generate questions depending on your chosen topic</p>
                    </div>
                    <div className="guide-item">
                        <p>Do your best and test yourself</p>
                    </div>
                </div>

                <div className="ai-prompt">
                    <form onSubmit={handleSubmit}>
                        <input
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            type="text"
                            placeholder="Pick a topic"
                        />
                        <button className="btn">Let's Learn</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

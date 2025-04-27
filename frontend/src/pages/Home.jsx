import { Login } from "../cmps/Login"
import { useState } from "react"
import { SignUp } from "../cmps/Signup"
import { useAuthStore } from "../store/useAuthStore"
import Loader from "../cmps/Loader"

export function Home() {
    const { isLoading, authUser } = useAuthStore()

    const [isOpen, setIsOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [fadeClass, setFadeClass] = useState('fade-in')

    function handleClose() {
        setFadeClass('fade-out')
        setTimeout(() => {
            setIsOpen(false)
            setFadeClass('fade-in')
        }, 500)
    }

    function toggleISLogin() {
        setIsLogin(prev => !prev)
    }

    function toggleIsOpen() {
        setIsOpen(prev => !prev)
    }

    if (isLoading) return <Loader />

    return (
        <>
            {!authUser && (
                <section className="home">
                    <div className="container">
                        <main className="home-flex">
                            <div className="right-side">
                                <div className="right-side-container">
                                    <h1><span>Quizzy</span> let us test you</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta libero saepe ea quisquam? Fuga aperiam similique architecto? Qui, veniam.</p>
                                    <button className='btn' onClick={toggleIsOpen}>Start</button>
                                </div>
                            </div>

                            <div className="left-side">
                                <div className="left-side-flex">
                                    <div className="left-side-flex-images">
                                        <img className="img1" src="img1.jpg" alt="image" />
                                        <img className="img2" src="img4.jpg" alt="image" />
                                    </div>
                                    <div className="left-side-flex-text">
                                        <h2>AI is here to help you</h2>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, magnam.</p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
            )}

            {isOpen && (
                <>
                    {isLogin ? (
                        <Login close={handleClose} toggle={toggleISLogin} fadeClass={fadeClass} />
                    ) : (
                        <SignUp close={handleClose} toggle={toggleISLogin} fadeClass={fadeClass} />
                    )}
                </>
            )}
        </>
    )
}

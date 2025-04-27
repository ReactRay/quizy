
import { UserProfile } from "../cmps/UserProfile"
import { useAuthStore } from "../store/useAuthStore"

export function MainIndex() {


    const { authUser, logout } = useAuthStore()


    return (
        <section className="main-page">
            <div className="container">
                <div className="profile-flex">
                    <UserProfile />

                    <button onClick={logout}
                        className="btn">Logout</button>
                </div>


                <div className="guide-flex">
                    <div className="guide-item">
                        <p>
                            put your input down below
                        </p>
                    </div>

                    <div className="guide-item">
                        <p>
                            Ai will generate questions depending on your chosen topic
                        </p>
                    </div>

                    <div className="guide-item">
                        <p>
                            Do your best and test your self
                        </p>
                    </div>

                </div>


                <div className="ai-prompt">


                    <form >
                        <input type="text" placeholder="pick a topic " />
                        <button className="btn">let's learn</button>
                    </form>


                </div>

            </div>


        </section >
    )
}
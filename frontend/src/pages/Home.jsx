
export function Home() {


    return (
        <section className="home">

            <div className="container">

                <main className="home-flex">

                    <div className="right-side">
                        <div className="right-side-container">
                            <h1><span>Quizzy</span> let us test you</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta libero saepe ea quisquam? Fuga aperiam similique architecto? Qui, veniam.</p>
                            <button>Start</button>
                        </div>
                    </div>

                    <div className="left-side">

                        <div className="left-side-flex">

                            <div className="left-side-flex-images">
                                <img className="img1" src="img1.jpg" alt="image" />
                                <img className="img2" src="img4.jpg" alt="image" />
                            </div>

                            <div className="left-side-flex-text">
                                <h2>ai is here to help you</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, magnam.</p>
                            </div>

                        </div>

                    </div>
                </main>


            </div>

        </section>
    )
}
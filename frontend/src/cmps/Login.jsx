import { useState } from 'react';

export function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section className='login-modal'>
            <div className="login">
                <div className='form-container'>


                    <form className="form">
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className='btn' type="submit">Login</button>
                    </form>
                    <div>
                        <p>don't have an account? <span className='span-link'>Sign up now</span></p>

                    </div>
                </div>

                <div className='login-image'>
                    <img src="/ai5.jpg" alt="img" />
                </div>
            </div>
            <button className='btn close'>X</button>
        </section>
    );
}

import { useState } from 'react';

import { useAuthStore } from '../store/useAuthStore';

export function SignUp({ close, toggle, fadeClass }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { signup } = useAuthStore()

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    async function handleSignUp(e) {
        e.preventDefault()

        await signup(formData)
    }

    return (
        <div className={`login ${fadeClass}`}>
            <button className='btn close' onClick={close}>X</button>


            <div className='login-image'>
                <img src="/ai2.jpg" alt="img" />
            </div>
            <div className='form-container'>

                <form className="form" onSubmit={handleSignUp}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
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
                    <button className='btn' type="submit">Sign Up</button>
                </form>
                <div>
                    <p>already have an account? <span className='span-link' onClick={toggle}>Login now</span></p>
                </div>
            </div>
        </div>
    );
}

import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

export function Login({ close, toggle, fadeClass }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { login } = useAuthStore()

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    async function handleLogin(e) {
        e.preventDefault()
        await login(formData)
    }

    return (
        <div className={`modal-wrapper ${fadeClass}`}>
            <div className="login">
                <button className="btn close" onClick={close}>
                    X
                </button>
                <div className="form-container">
                    <form className="form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
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
                        <button className="btn" type="submit">
                            Login
                        </button>
                    </form>
                    <div>
                        <p>
                            Don't have an account?{' '}
                            <span className="span-link" onClick={toggle}>
                                Sign up now
                            </span>
                        </p>
                    </div>
                </div>
                <div className="login-image">
                    <img src="/ai5.jpg" alt="Login visual" />
                </div>
            </div>
        </div>
    )
}

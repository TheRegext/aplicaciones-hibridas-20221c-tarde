import React, {useState} from "react";
import * as authService from "../Services/auth.service";

function PageLogin({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        authService.login(username, password)
            .then((data) => {
                onLogin(data.user, data.token);
            })
            .catch((err) => {
                setError(err.message);
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Login" />
            </form>
            {error && <div>{error}</div>}
        </div>
    );
}

export default PageLogin;

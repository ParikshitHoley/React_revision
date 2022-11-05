import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { loginUser, authState } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          loginUser(res.token);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="email-input"
              type="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button disabled={loading} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;

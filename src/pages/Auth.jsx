import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [mode, setMode] = useState("signup");
  const [error, setError] = useState(null); 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signUp, user, logout, login } = useContext(AuthContext);
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    const { email, password } = data;
    setError(null); 

    try {
      if (mode === "signup") {
        await signUp(email, password);
        alert("User submitted the form");
        navigate("/");
      } else {
        await login(email, password);
        navigate("/");
      }
    } catch (err) {
      
      setError(err.message || "An error occurred during authentication.");
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "Sign up" : "Login"}
          </h1>

          
          {error && <div className="error-message">{error}</div>}

          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                className="form-input"
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="form-error">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input
                className="form-input"
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
              />
              {errors.password && <p className="form-error">{errors.password.message}</p>}
            </div>

            <button className="btn btn-primary btn-large" type="submit">
              {mode === "signup" ? "Sign up" : "Login"}
            </button>
          </form>

          <div className="auth-switch"></div>

          {mode === "signup" ? (
            <p>
              Already have an account?{" "}
              <span className="auth-link" onClick={() => {
                setMode("login");
                setError(null); // Clear errors when switching modes
              }}>
                Login
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span className="auth-link" onClick={() => {
                setMode("signup");
                setError(null); // Clear errors when switching modes
              }}>
                Sign Up
              </span>
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default Auth;
import React from "react";
import "./styles.css";
import ToDoApp from "./ToDoApp";

const Login = () => {
  const [value, setValue] = React.useState(
    localStorage.getItem("username") || ""
  );
  const [isLogInVisible, setLogInIsVisible] = React.useState(true);
  const [welcomeMessage, setWelcomeMessage] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem("username", value);
  }, [value]);

  React.useEffect(() => {
    setValue("");
  }, []);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleLogin = () => {
    if (!value) {
      alert("Please enter your username");
    } else {
      setLogInIsVisible(false);
      setWelcomeMessage(true);
    }
  };

  const handleLogout = () => {
    setValue("");
    setLogInIsVisible(true);
    setWelcomeMessage(false);
  };

  return (
    <>
      {welcomeMessage ? (
        <>
          <div className="userInfo-container">
            {" "}
            <div>
              <p>
                {" "}
                <strong>Welcome,</strong> {value}{" "}
              </p>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        ""
      )}
      <h1 className="toDo-app-header">ToDo App</h1>
      {isLogInVisible ? (
        <div className="login-container">
          <h3>Log In</h3>
          <input
            value={value}
            type="text"
            onChange={onChange}
            placeholder="Enter your username"
            required
            className="login-username"
          />
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      ) : (
        ""
      )}

      {welcomeMessage ? (
        <div>
          <ToDoApp />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Login;

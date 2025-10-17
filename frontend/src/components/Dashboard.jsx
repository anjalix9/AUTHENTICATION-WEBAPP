import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <h3>Please log in.</h3>;

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Your role: {user.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

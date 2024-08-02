import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/Auth/authSlice";
import Button from "./Button";

const Topnav = ({ title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="flex justify-between items-center px-5 py-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Button size="small" handleOnClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Topnav;

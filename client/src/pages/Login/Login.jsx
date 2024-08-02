import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormInput from "./../../components/FormInput";
import Button from "../../components/Button";
import { loginSuccess } from "../../store/Auth/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is Required"),
  password: Yup.string().required("password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/shakilprint/users/login",
          values,
        );
        const { user, token } = response.data;
        dispatch(loginSuccess({ user, token }));
        navigate("/");
      } catch (error) {
        console.error("Login failed", error);
        alert("Login failed. Please check your credentials.");
      }
    },
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-200">
      <h1 className="mb-10 text-5xl font-semibold text-primary">Login</h1>
      <div className="flex w-96 rounded-lg bg-white p-10 shadow-md">
        <form
          autoComplete
          onSubmit={formik.handleSubmit}
          className="flex w-full flex-col gap-5"
        >
          <div className="flex flex-col">
            <div>
              <FormInput
                id="username"
                name="username"
                label="Username"
                formik={formik}
              />
            </div>
            <div>
              <FormInput
                id="password"
                name="password"
                label="Password"
                type="password"
                formik={formik}
              />
            </div>
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;

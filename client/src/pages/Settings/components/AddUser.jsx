import FormInput from "./../../../components/FormInput";
import { useFormik } from "formik";
import Button from "./../../../components/Button";
import axios from "axios";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  role: Yup.string()
    .oneOf(["admin", "user"], "Invalid role")
    .required("Role is required"),
});

const AddUser = ({ fetchUsers }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      role: "user", // default role
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:5000/shakilprint/users", values);
        formik.resetForm();
        fetchUsers();
      } catch (error) {
        console.error("Error submitting form", error);
        alert("Failed to add User");
      }
    },
  });

  return (
    <div className="flex gap-5">
      <FormInput
        w="full"
        formik={formik}
        name="username"
        label="Username"
        id="username"
      />
      <FormInput
        formik={formik}
        name="password"
        label="Password"
        id="password"
      />
      <div className="">
        <label htmlFor="role" className="mb-2 block font-bold text-gray-700">
          Role
        </label>
        <div className="mt-2">
          <label className="mr-6 inline-flex items-center">
            <input
              type="radio"
              name="role"
              value="admin"
              checked={formik.values.role === "admin"}
              onChange={formik.handleChange}
              className="form-radio"
            />
            <span className="ml-2">Admin</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="role"
              value="user"
              checked={formik.values.role === "user"}
              onChange={formik.handleChange}
              className="form-radio"
            />
            <span className="ml-2">User</span>
          </label>
          {formik.errors.role && formik.touched.role && (
            <div className="mt-1 text-sm text-red-600">
              {formik.errors.role}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <Button type="submit" handleOnClick={formik.handleSubmit} size="small">
          Add User
        </Button>
      </div>
    </div>
  );
};

export default AddUser;

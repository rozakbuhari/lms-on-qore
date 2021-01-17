import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
// import * as Yup from "yup";
import cx from "classnames";
import { useRouter } from "next/router";

// const RegisterSchema = Yup.object().shape({
//   role: Yup.string().required("Please choose a role"),
//   name: Yup.string()
//     .min(3, "Please input a longer name")
//     .required("Input your name here"),
//   email: Yup.string()
//     .email("Please put a valid email")
//     .required("Your email is required"),
//   password: Yup.string()
//     .min(6, "Choose password a least 6 characters length")
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     // .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm your password"),
// });

const RegisterPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      role: "student",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    // validationSchema: RegisterSchema,
    onSubmit: (values, { setSubmitting }) => {
      (async () => {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        setSubmitting(false);
        router.push("/login");
      })();
    },
  });

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign up for an account
            </h2>
          </div>
          <div>
            <div className="mt-6">
              <form
                className="space-y-6"
                onSubmit={formik.handleSubmit}
                onChange={formik.handleChange}
              >
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    You are a?
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={cx(
                        "appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        {
                          "border-2 border-red-300": !!formik.errors["name"],
                        }
                      )}
                    />
                  </div>
                  {formik.errors["name"] && (
                    <p className="mt-2 text-sm text-red-600" id="name-error">
                      {formik.errors["name"]}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={cx(
                        "appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        {
                          "border-2 border-red-300": !!formik.errors["email"],
                        }
                      )}
                    />
                  </div>
                  {formik.errors["email"] && (
                    <p className="mt-2 text-sm text-red-600" id="email-error">
                      {formik.errors["email"]}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select your password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className={cx(
                        "appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        {
                          "border-2 border-red-300": !!formik.errors[
                            "password"
                          ],
                        }
                      )}
                    />
                  </div>
                  {formik.errors["password"] && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="password-error"
                    >
                      {formik.errors["password"]}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Re-type your password
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className={cx(
                        "appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                        {
                          "border-2 border-red-300": !!formik.errors[
                            "confirmPassword"
                          ],
                        }
                      )}
                    />
                  </div>
                  {formik.errors["confirmPassword"] && (
                    <p
                      className="mt-2 text-sm text-red-600"
                      id="confirmPassword-error"
                    >
                      {formik.errors["confirmPassword"]}
                    </p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full flex justify-center disabled:opacity-50 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Register
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Already have an account?
                    </span>
                  </div>
                </div>

                <div>
                  <Link href="/login">
                    <a className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      Login here
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default RegisterPage;

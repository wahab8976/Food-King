import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import { Spinner } from "@nextui-org/react";

const Login = () => {
  //States
  const [selected, setSelected] = React.useState("login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  //React Hook Form
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm();

  const {
    register: signupRegister,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
  } = useForm();

  //Functions to communicate with backend
  const onLoginSubmit = async (loginData) => {
    console.log("Login Data:", loginData);
    try {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:3000/user/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return;
      }
    } catch (error) {
      setError("Something went wrong...");
      // Handle error (e.g., show error message to the user)
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSignupSubmit = async (signUpData) => {
    console.log("Signup Data:", signUpData);
    try {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:3000/user/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Navbar />
      <Slider />
      <div className="flex pt-20 items-center flex-col">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
        >
          <Tab key="login" title="Log In">
            <Card>
              <CardBody>
                <div className="w-[315px] min-h-[60vh] max-h-auto flex items-center justify-center flex-col">
                  <h1 className="font-bold pb-5">Login to your Account!</h1>
                  <form
                    className="flex flex-col items-center gap-4"
                    onSubmit={handleLoginSubmit(onLoginSubmit)}
                  >
                    <input
                      className="w-[300px] border-2 py-1 px-1 rounded-xl"
                      placeholder="Phone number"
                      {...loginRegister("tempIdentifier", {
                        required: {
                          value: true,
                          message: "Please enter your phone number",
                        },
                        minLength: {
                          value: 11,
                          message: "Minimum length of Phone number is 11",
                        },
                      })}
                    />
                    {loginErrors.tempIdentifier && (
                      <span className="text-red-600">
                        {loginErrors.tempIdentifier.message}
                      </span>
                    )}
                    <input
                      placeholder="Password"
                      className="w-[300px] border-2 rounded-xl py-1 px-1"
                      {...loginRegister("password", {
                        required: {
                          value: true,
                          message: "Please enter your password",
                        },
                      })}
                    />
                    {loginErrors.password && (
                      <span className="text-red-600">
                        {loginErrors.password.message}
                      </span>
                    )}
                    <div className="flex justify-around gap-7 ">
                      <span className="flex gap-2">
                        <input type="checkbox" />
                        <span>Remember me</span>
                      </span>
                      <span>Reset Password</span>
                    </div>
                    {/* Will only render if encountered error from Backend */}

                    {error && <span className="text-red-700">{error}</span>}
                    {isSubmitting ? (
                      <Spinner label="Please Wait..." color="warning" />
                    ) : (
                      <input
                        className="bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-lg w-[40%] py-2"
                        type="submit"
                      />
                    )}
                  </form>
                </div>
              </CardBody>
            </Card>
          </Tab>

          <Tab key="signup" title="Sign Up">
            <Card>
              <CardBody>
                <div className="sm:w-[315px] w-[290px] min-h-[60vh] max-h-auto flex items-center justify-center flex-col">
                  <h1 className="font-bold pb-5">Create a new Account!</h1>
                  <form
                    className="flex flex-col items-center gap-4"
                    onSubmit={handleSignupSubmit(onSignupSubmit)}
                  >
                    <input
                      className="w-[300px] border-2 py-1 px-1 rounded-xl"
                      placeholder="Your Name"
                      {...signupRegister("username", {
                        required: {
                          value: true,
                          message: "Please enter your name!",
                        },
                      })}
                    />
                    {signupErrors.username && (
                      <span className="text-red-600">
                        {signupErrors.username.message}
                      </span>
                    )}
                    <input
                      className="w-[300px] border-2 py-1 px-1 rounded-xl"
                      placeholder="Phone number"
                      {...signupRegister("phone", {
                        required: {
                          value: true,
                          message: "Please enter your phone number",
                        },
                      })}
                    />
                    {signupErrors.phone && (
                      <span className="text-red-600">
                        {signupErrors.phone.message}
                      </span>
                    )}
                    <input
                      placeholder="Password"
                      className="w-[300px] border-2 rounded-xl py-1 px-1"
                      {...signupRegister("password", {
                        required: {
                          value: true,
                          message: "Please enter new password",
                        },
                      })}
                    />
                    {signupErrors.password && (
                      <span className="text-red-600">
                        {signupErrors.password.message}
                      </span>
                    )}
                    <span>Already have an account?</span>
                    {error && <span className="text-red-700">{error}</span>}
                    {isSubmitting ? (
                      <Spinner label="Please Wait..." color="warning" />
                    ) : (
                      <input
                        className="bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-lg w-[40%] py-2"
                        type="submit"
                      />
                    )}
                  </form>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import { useForm } from "react-hook-form";
import Call from "../../public/icons/phone.svg";
import location from "../../public/icons/location.svg";
import clock from "../../public/icons/clock.svg";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // useEffect to update isLoading based on isSubmitting
  useEffect(() => {
    setIsLoading(isSubmitting);
  }, [isSubmitting]);

  //Sending post request to backend Servers
  const onSubmit = async (data) => {
    setIsLoading(true); // Start loading

    try {
      // Simulating network delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Perform form submission
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Navbar />
      <Slider />
      <div
        id="contactForm"
        className="pt-24 px-5 flex justify-center items-center h-auto"
      >
        <div
          id="Form1"
          className="bg-gray-100 h-[80vh] w-[60vw] rounded-lg px-5"
        >
          <h1 className=" py-3 font-semibold text-4xl">CONTACT US</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input
              className="bg-gray-100 rounded-t-md px-1 w-2/3 mb-4 border-b-4 border-black h-8"
              name="Username"
              id="Username"
              placeholder="Enter Your name"
              {...register("Username", {
                required: "Please Enter your name!",
              })}
            />
            {errors.Username && (
              <div className="text-red-600">{errors.Username.message}</div>
            )}

            <input
              className="bg-gray-100 w-2/3 px-1 rounded-t-md border-b-4 mb-4 h-8 border-black"
              name="email"
              id="email"
              placeholder="Enter Your Valid Email Address"
              {...register("email", {
                required: "Please Enter your Email!",
              })}
            />
            {errors.email && (
              <div className="text-red-600">{errors.email.message}</div>
            )}

            <textarea
              className="p-2 border-b-4  rounded-t-lg border-black bg-gray-100"
              name="Message"
              id="Message"
              {...register("Message", {
                required: { value: true, message: "Please Enter your message" },
                minLength: {
                  value: 15,
                  message: "Minimum length of message is 20",
                },
              })}
              placeholder="Enter your message"
              style={{ height: "150px", resize: "none" }}
            />
            {errors.Message && (
              <div className="text-red-600">{errors.Message.message}</div>
            )}

            <button
              disabled={isLoading}
              className=" bg-yellow-600 text-white mt-6 transition-hover hover:bg-yellow-700 duration-300 border-black border-2 px-8 py-2 font-semibold w-fit"
            >
              Submit
            </button>
          </form>
        </div>

        <div
          id="callCard"
          className="relative h-[200px] top-[250px] left-[-200px] px-2 py-5 text-white bg-gray-800 w-[500px]"
        >
          <div>
            <h3 className="flex items-center gap-4 font-semibold">
              <span>
                <img src={Call} alt="Call" />
              </span>
              Call Us
            </h3>
            <p>+92 301 3588797</p>
          </div>
          <div>
            <h3 className="flex items-center gap-4 font-semibold">
              <span>
                <img src={location} alt="Location" />
              </span>
              Our location
            </h3>
            <p>Habib Plaza-Ajnala Road, Opposite Dhinda Road,</p>
            <p>Karianwala, Gujrat</p>
          </div>
          <div>
            <h3 className="flex items-center gap-4 font-semibold">
              <span>
                <img src={clock} alt="Clock" />
              </span>
              Opening Hours
            </h3>
            <p>10:00 - 24:00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import { getAuth, signInWithPhoneNumber } from "firebase/auth";

// Initialize Firebase Auth
const auth = getAuth();

// Function to send OTP to a phone number
const sendOTP = async (phoneNumber) => {
  try {
    // Send OTP to the provided phone number
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
    console.log('OTP sent successfully');
    return confirmationResult; // Return confirmation result for OTP verification
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error; // Throw error if OTP sending fails
  }
};

// Function to verify OTP entered by the user
const verifyOTP = async (confirmationResult, otp) => {
  try {
    // Verify OTP entered by the user using confirmation result
    await confirmationResult.confirm(otp);
    console.log('User signed in successfully');
    // You can perform additional actions after successful login
  } catch (error) {
    console.error('Error verifying OTP:', error);
    throw error; // Throw error if OTP verification fails
  }
};

export { sendOTP, verifyOTP };

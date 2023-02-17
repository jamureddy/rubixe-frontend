import axios from "axios";

const registration = async (data) => {
  const userData = {
    name: data.fullName,
    email: data.email,
    mobile: data.mobile,
  };
  try {
    const response = await axios.post(
      "https://rubixe-backend.onrender.com/create",
      userData
    );
    return response;
  } catch (error) {
    console.log("error");
  }
};

export default registration;

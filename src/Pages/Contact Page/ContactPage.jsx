import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { easeIn, motion } from "framer-motion";
import './ContactPage.scss'
const ContactForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    projectType: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <div className="max-w-5xl flex mt-[100px]  justify-around mx-auto gap-5 align-middle">
      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        <div>
          <label htmlFor="name" className="block font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium text-white">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
          />
        </div>
        <div>
          <label htmlFor="location" className="block font-medium text-white">
            Location
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
            required
          >
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="projectType" className="block font-medium text-white">
            Project Type
          </label>
          <input
            type="text"
            id="projectType"
            name="projectType"
            placeholder="ex: home, office, landscape, etc..."
            value={formData.projectType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      <div className="bg-[#1a1a1a] w-4/6 p-5 flex flex-col align-middle justify-between details-div">
        <h1 className="flex justify-center text-4xl text-white">
          Let's Work Together{" "}
        </h1>
        <p className="text-xl text-white text-center">
          We are here to provide design consulting, furniture and styling, and
          full-service renovation and design services. We are located in the Bay
          Area, CA, but are open to taking on remote projects as well. Please
          fill out the form with a brief description of what you’re looking for,
          and we will get back to you within 48 business hours. We look forward
          to hearing from you!
        </p>
        <div className="flex flex-col justify-between gap-2">
          <h1 className="text-white text-lg">Location: </h1>
          <h1 className="text-white text-lg">Email: </h1>
          <h1 className="text-white text-lg">Phone: </h1>
        </div>
        <div className="flex justify-center gap-5">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2, ease: easeIn }}
          >
            <FaFacebook color="white" size={30} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2, ease: easeIn }}
          >
            <FaXTwitter color="white" size={30} />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2, ease: easeIn }}
          >
            <RiInstagramFill color="white" size={30} />
          </motion.div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

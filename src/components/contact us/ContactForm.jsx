"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
        });

        setFormData({
          fname: "",
          lname: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });

        console.log("Success:", data);
      } else {
        setStatus({
          submitting: false,
          submitted: false,
          error: data.message || "Failed to submit the form. Please try again.",
        });
        console.error("Error:", data);
      }
    } catch (error) {
      // setStatus({
      //   submitting: false,
      //   submitted: false,
      //   error: 'Network error occurred. Please check your connection and try again.'
      // });
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full  max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="flex items-start mb-6 md:mb-0">
          <div className="bg-lg p-4 mr-4 rounded-lg">
            <FaMapMarkerAlt className="text-2xl text-white " />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-900">Address Location</h3>
            <p className="text-gray-700 ">
              B-10, Anand Dham Residency,
              <br />
              Paliyad Road, Botad – 364710,
              <br />
              Gujarat, India
            </p>
          </div>
        </div>

        <div className="flex items-start mb-6 md:mb-0">
          <div className="bg-lg p-4 mr-4 rounded-lg">
            <FaPhoneAlt className="text-2xl text-white" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-900">Phone Number</h3>
            <p className="text-gray-700 ">+91 9824670208</p>
          </div>
        </div>

        <div className="flex items-start mb-6 md:mb-0">
          <div className="bg-lg p-4 mr-4 rounded-lg">
            <FaEnvelope className="text-2xl text-white" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-900 ">Email Address</h3>
            <p className="text-gray-700 ">rameshtaorganic@gmail.com </p>
          </div>
        </div>
      </div>

      <div className="mb-8 md:text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-900 text-black mt-4 mb-2">
          Let’s Build Something Organic
        </h2>
        <p className="text-gray-600 text-base md:mt-4">
          No bots. No auto-replies. Just real people ready to chat. Drop your
          message below and we’ll get back to you soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {status.submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              <p className="font-bold">Message sent successfully!</p>
              <p>Thank you for contacting us. We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {status.error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <p>
                    <strong>Error:</strong> {status.error}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-base">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="fname"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100 "
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lname" className="block mb-2 text-base">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100 "
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-base">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100 "
                    placeholder="Phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded bg-gray-100 "
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded bg-gray-100 "
                  placeholder="Message"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className={`px-6 py-3 bg-dg text-white text-md  font-900 rounded-[8px] hover:bg-lg transition-all duration-300  text-center cursor-pointer flex  ${
                  status.submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status.submitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <IoIosSend className="text-3xl" />
                    <span className="mx-2">Send</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 w-full">
          <iframe
            title="Rameshta Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14748.952975038084!2d71.65084182545575!3d22.16993803076087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f539b2c730c85%3A0xdf9984ed34b0cfdb!2sBotad%2C%20Gujarat%20364710%2C%20India!5e0!3m2!1sen!2sin!4v1681355292943!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

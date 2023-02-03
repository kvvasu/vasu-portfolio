import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action=""
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 ">
          <p className="flex flex-start  text-5xl font-bold   text-[#001b5e] ">
            Contact.
          </p>
          <p className="flex flex-start  text-[#001b5e] py-4">
            Get in touch or shoot me an email directly on waasukvs@gmail.com
          </p>
        </div>
        <input
          className="p-2 shadow border-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2  shadow border-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 shadow border-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#001b5e] text-bold border rounded-lg  px-4 py-3 my-8 mx-auto shadow-lg shadow-gray-400  hover:scale-110 ease-in duration-200 ">
          Send Message
        </button>
      </form>
    </div>
  );
};
export default Contact;

import React from "react";

const Contact = () => {
  const sendEmail = () => {
    return;
  };

  return (
    <div
      className="mt-40 w-full h-full bg-gradient-to-b from-[#2e2257]/5 to-pink-400"
      id="contacts"
    >
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Contact</h2>
      <h3 className="text-slate-400 mx-auto mt-[-6rem] mb-[6rem] text-center font-bold">
        Please contact me directly at{" "}
        <a
          className="underline text-blue"
          href="mailto:nishant.aggarwal.cs@gmail.com"
        >
          nishant.aggarwal.cs@gmail.com
        </a>{" "}
        <br /> NOTE: The form below is temporarily disabled. Please use my email
        to get in touch with me. Thank you!
      </h3>
      <div className="xl:px-[20rem]">
        <form
          onSubmit={async (formData) => {
            console.log("Client Side");
            await sendEmail(formData);
          }} // Use onSubmit to handle form submission
          className="mt-5 flex flex-col justify-center text-black"
        >
          <input
            className="h-14 rounded-lg border-black p-4"
            name="senderEmail"
            type="email"
            placeholder="Email"
            required
            maxLength={500}
          />
          <textarea
            className="my-3 h-[20rem] rounded-lg border-black p-4"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <button
            type="submit"
            className="items-center flex justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

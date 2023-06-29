import Image from "next/image";
import React from "react";
import MapPointSVG from "@/public/MapPointSVG.svg";
import LetterSVG from "@/public/LetterSVG.svg";

const formInputList = [
  { name: "firstName", placeholder: "First Name" },
  { name: "lastName", placeholder: "Last Name" },
  { name: "email", placeholder: "Your Email", type: "email" },
  { name: "companyName", placeholder: "Company Name" },
  { name: "phoneNumber", placeholder: "Phone Number", type: "numeric" },
  { name: "companyType", placeholder: "Company Type" },
];

type InputComponentTypes = {
  inputProps: {
    type?: string;
    name: string;
    placeholder?: string;
  };
};

const InputComponent: React.FC<InputComponentTypes> = ({ inputProps }) => (
  <input
    {...inputProps}
    className="p-2 border border-activeTab rounded-xl bg-light text-secondary placeholder:text-secondary"
  />
);

const ContactUsPage = () => {
  return (
    <div>
      <section className="grid lg:grid-cols-2 grid-cols-1 bg-lightGray py-8per pr-5per">
        <div className="col-span-1"></div>
        <div className="col-span-1">
          <h6 className="text-16 text-activeTab font-sharpsans700 tracking-widest">
            {"let's get in touch"}
          </h6>
          <h1 className="lg:text-56 md:text-40 text-32 text-secondary font-sharpsans800">
            Contact Us
          </h1>
          <form
            action=""
            className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-4"
          >
            {formInputList.map((input, index) => (
              <InputComponent key={index} inputProps={input} />
            ))}
            <button className="text-16 leading py-16 px-24 max-w-200 w-full my-5 font-nunito700 bg-accent text-secondary rounded-16">
              Send Message
            </button>
          </form>

          <p className="text-14 text-secondary font-nunito400 lg:w-3/4">
            Want to know more details on how we can help you? Reach out to us
            today! Cargoe Inc. is supported by stellar customer service staff
            who always stay on top of current updates so they can serve you. We
            value your feasibility and cater to your queries as soon as
            possible. So, if you’re interested in our services, please fill out
            your information and we’ll get the conversation started immediately.
          </p>
          <div className="flex items-start gap-4 my-5">
            <div className="w-1/3">
              <Image src={MapPointSVG} alt="Marker" />
              <p className="text-14 text-secondary font-nunito700">
                1401 21ST STREET SUITE R SACRAMENTO CA 95811
              </p>
            </div>
            <div className="">
              <Image src={LetterSVG} alt="Marker" />
              <p className="text-14 text-secondary font-nunito700">
                info@cargoe.io
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;

import React from 'react'
import { TextInput } from "@mantine/core";
import ContactInput from '../components/Inputs/ContactInput';
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";






const ContactPage = () => {
  return (
    <div className="bg-slate-50 text-slate-600">
      <div className="border-2 border-black flex flex-col justify-center items-center ">
        <div className="border-2 border-black form-container h-screen flex flex-row">
          <div className="p-4 flex flex-col justify-center items-center left-container h-fit w-full md:w-8/12 ">
            <div className="contact-me  ">
              <h1 className="text-4xl text-center font-bold border-b border-slate-200">
                Contact Me
              </h1>
              <p>
                Please get in contact with me about this project or anything
              </p>
            </div>
            <div className="flex flex-row justify-between input-section w-full p-4">
              <ContactInput label="First Name" placeholder="First Name" />
              <ContactInput label="Last Name" placeholder="Last Name" />
            </div>
            <div className="flex flex-row justify-between input-section w-full p-4">
              <ContactInput label="Email" placeholder="john@email.co.uk" />
              <ContactInput
                label="Mobile number"
                placeholder="+44 7805 903421"
              />
            </div>
            <div className="w-full flex justify-center">
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none">Message</label>
                <textarea className="h-40 text-base leading-none text-gray-900 p-4 focus:oultine-none focus:border-blue-700 mt-4 bg-white border rounded border-gray-200"></textarea>
              </div>
            </div>
            <p className="text-xs mt-4">
              By submitting this form you agree to our terms and conditions and
              our privacy policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </p>
            <button
              type="submit"
              className="mt-4 hover:bg-slate-300 rounded-full m-2 w-6/12 p-2 bg-slate-100 border-2 border-slate-300"
            >
              Submit
            </button>
          </div>
          <div className=" p-4 hidden md:flex flex-col items-center right-containr w-4/12 h-full border-2">
            <h2 className="text-bold text-xl">Other ways to get in touch</h2>
            <div className="h-full flex flex-col justify-evenly">
              <div className="flex flex-col items-center justify-center">
                <FaPhoneSquareAlt color="grey" size={50} />
                <p>+44 7805 903421</p>
                <p>+44 7805 903421</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MdEmail color="grey" size={60} />
                <p>+44 7805 903421</p>
                <p>+44 7805 903421</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <IoMdPin color="grey" size={60} />
                <p>1234 Elm Street <br/> Springfield,<br/> IL 62701 United States</p>
              </div>
            </div>
            <div className="map">MAP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage

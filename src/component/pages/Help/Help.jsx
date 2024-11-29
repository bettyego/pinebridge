import React, { useState } from "react";
import Header from "../../Company/Header/Header";
import Footer from "../../Company/Footer/Footer";
import Accordion from "./Accordion";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Help = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mppgo48', 'template_wssuy1d', form.current, {
        publicKey: 'LbW33qiOkV1Cf6uDq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <Header/>
    <Accordion/>
    <div className="mt-8 max-w-md mx-auto mb-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">State ur problem</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            id="email"
            required
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <textarea name="message" id="" placeholder="leave a comment" className="border-2 w-full border-slate-500 p-5 mb-5">

        </textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          submit
        </button>
      </form>
    </div>
    <Footer/>
    </>
  );
};




export default Help;

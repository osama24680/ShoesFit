import React, { useRef } from "react";
import { createContext } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import * as HomeData from "./Data/HomeData.js";
import * as AboutData from "./Data/AboutData.js";
import { BlogDetails } from "./Data/BlogDetails.js";

export const shoesStore = createContext(0);
export const ShoesProvider = (props) => {
  let age = 23;
  const form_BlgDetails = useRef();
  const form_Contact = useRef();

  const sendEmail_BlogDetails = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9g6qdal",
        "template_v0n291c",
        form_BlgDetails.current,
        {
          publicKey: "bspO51pH8GUc-Sz6o",
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {});
        },
        (error) => {
          console.log("error", error.text);
          toast.error("Something wrong happened!");
        }
      );
  };

  const sendEmail_Contact = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9g6qdal", "template_1lr3tfj", form_Contact.current, {
        publicKey: "bspO51pH8GUc-Sz6o",
      })
      .then(
        () => {
          toast.success("Message sent successfully!", {});
        },
        (error) => {
          console.log("error", error.text);
          toast.error("Something wrong happened!");
        }
      );
  };

  let values = {
    age,
    HomeData,
    BlogDetails,
    AboutData,
    form_BlgDetails,
    form_Contact,
    sendEmail_BlogDetails,
    sendEmail_Contact,
  };

  return (
    <shoesStore.Provider value={values}>{props.children}</shoesStore.Provider>
  );
};

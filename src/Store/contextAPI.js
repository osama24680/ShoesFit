import React, { useRef, useState, useEffect } from "react";
import { createContext } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import * as HomeData from "./Data/HomeData.js";
import * as AboutData from "./Data/AboutData.js";
import { BlogDetails } from "./Data/BlogDetails.js";

export const shoesStore = createContext(0);
export const ShoesProvider = (props) => {
  const [thingSpeakData, setThingSpeakData] = useState(null);
  const [thingSpeakError, setThingSpeakError] = useState(null);
  const [thingSpeakLoading, setThingSpeakLoading] = useState(false);

  const fetchData = async () => {
    setThingSpeakLoading(true);
    try {
      const response = await fetch(
        "https://api.thingspeak.com/channels/2801905/feeds.json?api_key=NARKY00ANCSO04U5&results=20"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();

      const sortedFeeds = result.feeds.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      setThingSpeakData({ ...result, feeds: sortedFeeds });
      // console.log(result.feeds);
    } catch (err) {
      setThingSpeakError(err.message);
    } finally {
      setThingSpeakLoading(false);
    }
  };

  // const BloodOxygen = thingSpeakData?.feeds.map((feed) =>console.log(feed.field1))
  //   const HeartRate = thingSpeakData?.feeds.map((feed) =>console.log(feed.field2))
  //   const Temperature = thingSpeakData?.feeds.map((feed) =>console.log(feed.field3))
  //   const Humidity = thingSpeakData?.feeds.map((feed) =>console.log(feed.field4))
  //   const Speed = thingSpeakData?.feeds.map((feed) =>console.log(feed.field5))
  //   const Acceleration = thingSpeakData?.feeds.map((feed) =>console.log(feed.field6))
 
  const BloodOxygen = thingSpeakData?.feeds.map((item) =>
    parseFloat(item.field1)
  );
  const HeartRate = thingSpeakData?.feeds.map((item) =>
    parseFloat(item.field2)
  );
  const Temperature = thingSpeakData?.feeds.map((item) =>
    parseFloat(item.field3)
  );
  const Humidity = thingSpeakData?.feeds.map((item) => parseFloat(item.field4));
  const Speed = thingSpeakData?.feeds.map((item) => parseFloat(item.field5));
  const Acceleration = thingSpeakData?.feeds.map((item) =>
    parseFloat(item.field6)
  );
const TimeData = thingSpeakData?.feeds.map((item) => {
  const date = new Date(item.created_at); // Convert the string to a Date object
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Enable 12-hour format
  });
  return time.replace(/ (am|pm)/, ""); // Remove 'AM' or 'PM'
});



  useEffect(() => {
    fetchData();
  }, []);

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
    HomeData,
    BlogDetails,
    AboutData,
    form_BlgDetails,
    form_Contact,
    sendEmail_BlogDetails,
    sendEmail_Contact,
    thingSpeakData,
    thingSpeakError,
    thingSpeakLoading,
    BloodOxygen,
    HeartRate,
    Temperature,
    Humidity,
    Speed,
    Acceleration,
    TimeData,
  };

  return (
    <shoesStore.Provider value={values}>{props.children}</shoesStore.Provider>
  );
};

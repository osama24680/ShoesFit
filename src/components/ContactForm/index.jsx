import { useContext } from "react";
import { shoesStore } from "../../Store/contextAPI.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ContactForm() {
  const ctx = useContext(shoesStore);
  return (
    <div className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30">
      <form
        className="row"
        ref={ctx.form_Contact}
        onSubmit={ctx.sendEmail_Contact}
      >
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Name</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="David John"
            name="userName"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Email</label>
          <input
            type="email"
            className="cs_form_field"
            placeholder="example@gmail.com"
            name="userEmail"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Subject</label>
          <input
            type="text"
            className="cs_form_field"
            placeholder="Your subject"
            name="subject"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Message</label>
          <textarea
            cols={30}
            rows={10}
            className="cs_form_field"
            placeholder="Write something..."
            defaultValue={""}
            name="message"
          />
          <div className="cs_height_42 cs_height_xl_25" />
        </div>
        <div className="col-lg-12">
          <div className="cs_height_18" />
          <button className="cs_btn cs_style_1">
            <span>Submit</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

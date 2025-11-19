import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_1bzxfis",
        "template_u699j1o",
        {
          from_name: formData.name,
          to_name: "ashan edirisinghe",
          from_email: formData.email,
          to_email: "ashanedirisingheugc@gmail.com",
          message: formData.message,
        },
        "Gpn4YbMoI7ufM4bjh"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        {/* Contact Info Section */}
        <div className="flex flex-col justify-center p-8 space-y-8 border border-white/10 rounded-2xl bg-primary">
          <div>
            <h2 className="mb-4 text-heading">Get in Touch</h2>
            <p className="text-neutral-400">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-lavender/10">
                <svg className="w-6 h-6 text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-white">Email</h3>
                <a href="mailto:ashanedirisingheugc@gmail.com" className="transition-colors text-neutral-400 hover:text-lavender">
                  ashanedirisingheugc@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-lavender/10">
                <svg className="w-6 h-6 text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-white">Phone</h3>
                <a href="tel:+94123456789" className="transition-colors text-neutral-400 hover:text-lavender">
                  +94 75 5742 917
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-lavender/10">
                <svg className="w-6 h-6 text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-white">Location</h3>
                <p className="text-neutral-400">
                  Galle, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col items-center justify-center p-5 border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;

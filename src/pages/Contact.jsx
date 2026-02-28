import { Helmet } from "react-helmet";
import ContactForm from "../components/common/ContactForm";
import React, { useState, useEffect } from "react";
import { sendContactEmail } from "../utils/emailService";

const Contact = () => {
  /* ===================== STATES ===================== */

  const initialFormState = {
    firstName: "",
    email: "",
    whatsappNumber: "",
    telegramId: "",
    country: "us",
    budget: "Still Evaluating",
    projectDescription: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [showWhatsappCountryDropdown, setShowWhatsappCountryDropdown] =
    useState(false);

  const [whatsappCountryCode, setWhatsappCountryCode] = useState("+91");

  /* ===================== DATA ===================== */

  const countries = [
    { code: "us", name: "United States", flag: "🇺🇸", dial: "+1" },
    { code: "in", name: "India", flag: "🇮🇳", dial: "+91" },
    { code: "uk", name: "United Kingdom", flag: "🇬🇧", dial: "+44" },
    { code: "ca", name: "Canada", flag: "🇨🇦", dial: "+1" },
    { code: "au", name: "Australia", flag: "🇦🇺", dial: "+61" },
  ];

  const budgets = [
    "Still Evaluating",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
  ];

  /* ===================== VALIDATION ===================== */

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateWhatsApp = (number) => number.replace(/\D/g, "").length === 10;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const formatWhatsAppNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    return cleaned.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Full name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address";

    if (!formData.whatsappNumber.trim())
      newErrors.whatsappNumber = "WhatsApp number is required";
    else if (!validateWhatsApp(formData.whatsappNumber))
      newErrors.whatsappNumber = "Must be 10 digits";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      setSubmitMessage("");

      try {
        // Send email notification
        const result = await sendContactEmail(formData, "contact");

        if (result.success) {
          setSubmitMessage(
            "Thank you! Your message has been sent successfully.",
          );
          setFormData(initialFormState);
          // Show success alert
          // alert(
          //   "✅ Form Submitted Successfully!\n\nThank you for contacting us. We will get back to you soon.",
          // );
        } else {
          setSubmitMessage(
            result.message || "Failed to send message. Please try again.",
          );
          alert("❌ Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitMessage("An error occurred. Please try again later.");
        alert("❌ An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  /* ===================== CLOSE DROPDOWNS ===================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setShowCountryDropdown(false);
        setShowBudgetDropdown(false);
        setShowWhatsappCountryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* ===================== JSX ===================== */

  return (
    <>
      <Helmet>
        <title>Contact BlueFalcon Technologies | Blockchain & AI Experts</title>

        <meta
          name="description"
          content="Contact BlueFalcon Technologies for blockchain development, AI solutions, Web3, DeFi, NFT marketplace, and smart contract development. Get a free consultation today."
        />

        <meta
          name="keywords"
          content="contact blockchain developer, AI development consultation, Web3 company contact, DeFi development company"
        />

        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>

      <div className="w-full bg-white">
        {/* ===== HEADING ===== */}
        <section className="pt-14">
          <div className="mx-auto max-w-layout px-6">
            <h1 className="text-center font-heading text-[36px] font-extrabold uppercase text-black md:text-[44px] lg:text-[72px]">
              GET IN TOUCH WITH{" "}
              <span className="text-brand-blue">BlueFalcon Technologies</span>
            </h1>
          </div>
        </section>

        {/* ===== FORM SECTION ===== */}
       
        <section className="pt-16 pb-20 w-full bg-white">
  <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-22">
    <ContactForm variant="default" />
  </div>
</section>

        {/* CTA */}
        {/* <section className="bg-brand-blue py-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready To Start Your Project?
          </h2>
          <button
            onClick={scrollToForm}
            className="mt-6 border-2 border-white px-6 py-3 text-white rounded-lg hover:bg-white hover:text-brand-blue"
          >
            Contact Us
          </button>
        </section> */}
      </div>
    </>
  );
};

export default Contact;

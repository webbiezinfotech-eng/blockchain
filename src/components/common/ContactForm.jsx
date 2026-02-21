import React, { useState, useEffect } from "react";
import { sendContactEmail } from "../../utils/emailService";
import map from '../../assets/imgs/contact/map.webp';
const ContactForm = ({ variant = "default" }) => {
  const initialFormState = {
    firstName: "",
    email: "",
    whatsappNumber: "",
    telegramId: "",
    country: "",
    budget: "Still Evaluating",
    projectDescription: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState("");

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);

  const budgets = [
    "Still Evaluating",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
  ];

  /* ================= FETCH COUNTRIES ================= */

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd"
        );
        const data = await res.json();

        const formatted = data
          .map((c) => ({
            code: c.cca2,
            name: c.name.common,
            flag: c.flags?.svg,
            dial:
              c.idd?.root && c.idd?.suffixes
                ? c.idd.root + c.idd.suffixes[0]
                : "",
          }))
          .filter((c) => c.name)
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountries(formatted);
      } catch (err) {
        console.error("Country fetch error:", err);
      }
    };

    fetchCountries();
  }, []);

  /* ================= VALIDATION ================= */

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateWhatsApp = (number) =>
    number.replace(/\D/g, "").length >= 8;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Full name required";

    if (!formData.email.trim())
      newErrors.email = "Email required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.whatsappNumber.trim())
      newErrors.whatsappNumber = "WhatsApp required";
    else if (!validateWhatsApp(formData.whatsappNumber))
      newErrors.whatsappNumber = "Invalid number";

    if (!formData.country)
      newErrors.country = "Select country";

    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) return;

    try {
      setLoading(true);
      const result = await sendContactEmail(formData, "contact");

      if (result.success) {
        setSubmitMessage("Form submitted successfully!");
        setFormData(initialFormState);
      } else {
        setSubmitMessage("Failed to send. Try again.");
      }
    } catch (err) {
      setSubmitMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= CLOSE DROPDOWN ================= */

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setShowCountryDropdown(false);
        setShowBudgetDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ================= FILTERED COUNTRIES ================= */

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-layout ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">

        <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
          {/* <div className="lg:col-span-6"> */}
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col gap-3 sm:gap-4">
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col ${variant === "compact" ? "gap-4" : "gap-5"
                }`}
            >
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Full Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  error={errors.firstName}
                />

                <InputField
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    handleInputChange("email", e.target.value)
                  }
                  error={errors.email}
                />
              </div>


              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* WhatsApp - 6 columns */}
                <div className="md:col-span-6">

                  {/* WhatsApp */}
                  <InputField
                    type="tel"
                    maxLength={10}
                    label="WhatsApp Number"
                    value={formData.whatsappNumber}
                    onChange={(e) =>
                      handleInputChange("whatsappNumber", e.target.value)
                    }
                    error={errors.whatsappNumber}
                  />
                </div>

                {/* BUDGET */}
                <div className="md:col-span-6 relative dropdown-container">
                  <label className="text-sm font-medium">
                    Budget
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      setShowBudgetDropdown(!showBudgetDropdown)
                    }
                    className="mt-1 w-full rounded-[40px] border border-gray-300 bg-white px-4 py-3 shadow-sm flex justify-between"
                  >
                    {formData.budget}
                    <span>▼</span>
                  </button>

                  {showBudgetDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-20">
                      {budgets.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => {
                            handleInputChange("budget", budget);
                            setShowBudgetDropdown(false);
                          }}
                          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* COUNTRY DROPDOWN */}
              <div className="relative dropdown-container">
                <label className="text-sm font-medium">
                  Select Country
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setShowCountryDropdown(!showCountryDropdown);
                    setCountrySearch("");
                  }}
                  className="mt-1 w-full rounded-[40px] border border-gray-300 bg-white px-4 py-3 shadow-sm flex justify-between items-center"
                >
                  <span>
                    {formData.country
                      ? countries.find((c) => c.code === formData.country)?.name
                      : "Select Country"}
                  </span>
                  <span>▼</span>
                </button>

                {showCountryDropdown && (
                  <div
                    className="absolute top-full left-0 right-0 mt-2 
                 bg-white border border-gray-300 
                 rounded-2xl shadow-xl z-50 
                 max-h-60 overflow-y-auto"
                  >
                    {/* 🔍 SEARCH BAR */}
                    <div className="p-3 border-b sticky top-0 bg-white">
                      <input
                        type="text"
                        placeholder="Search country..."
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg outline-none text-sm"
                      />
                    </div>

                    {/* COUNTRY LIST */}
                    {filteredCountries.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => {
                          handleInputChange("country", country.code);
                          setShowCountryDropdown(false);
                          setCountrySearch("");
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-3 text-sm"
                      >
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-5 h-4 object-cover rounded-sm"
                        />
                        <span>{country.name}</span>
                      </button>
                    ))}

                    {filteredCountries.length === 0 && (
                      <div className="px-4 py-2 text-sm text-gray-500">
                        No country found
                      </div>
                    )}
                  </div>
                )}

                {errors.country && (
                  <span className="text-xs text-red-500">
                    {errors.country}
                  </span>
                )}
              </div>



              {/* MESSAGE */}
              <div>
                <label className="text-sm font-medium">
                  Describe Your Project
                </label>
                <textarea
                  rows={5}
                  value={formData.projectDescription}
                  onChange={(e) =>
                    handleInputChange(
                      "projectDescription",
                      e.target.value
                    )
                  }
                  className="mt-1 w-full rounded-[20px] border border-gray-300 px-4 py-3 shadow-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-brand-blue px-8 py-3 text-white font-semibold hover:bg-brand-blue/90 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {submitMessage && (
                <p className="text-sm text-green-600">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

        </div>


        {/* <div className="hidden lg:block lg:col-span-1"></div> */}

        <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">

          <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-2.5 shadow-sm dark:border-white/20 dark:bg-gray-800">
            <div className="flex h-8 w-8 items-center justify-center flex-shrink-0">
              <svg
                className="h-4 w-4 text-brand-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <p className="font-heading text-sm sm:text-base font-normal text-black dark:text-white">
              +91 xxxxx xxxxx
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-2.5 shadow-sm dark:border-white/20 dark:bg-gray-800">
            <div className="flex h-8 w-8 items-center justify-center flex-shrink-0">
              <svg
                className="h-4 w-4 text-brand-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="font-heading text-xl leading-[1.6] sm:text-base font-normal text-black dark:text-white">
              blockchainappadvisor@gmail.com
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-gray-300 bg-white p-2.5 shadow-sm dark:border-white/20 dark:bg-gray-800">
            <div className="flex h-10 w-10 items-center justify-center flex-shrink-0 mt-1">
              <svg
                className="h-5 w-5 text-brand-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="font-heading text-xl leading-[1.6] sm:text-base font-normal text-black dark:text-white">
              Address...
            </p>
          </div>

          <div className="mt-6">
            <img
              src={map}   // 👈 apni image ka path yaha daalo
              alt="Contact Illustration"
              className="w-full max-w-md mx-auto lg:mx-0 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= INPUT COMPONENT ================= */

const InputField = ({
  label,
  value,
  onChange,
  error,
  type = "text",
}) => (
  <div>
    <label className="text-sm font-medium text-gray-800">
      {label}
    </label>

    <div
      className={`
        mt-1 rounded-[40px] border bg-white px-4 py-3 shadow-sm
        transition-all duration-300
        ${error
          ? "border-red-500 focus-within:ring-red-500"
          : "border-gray-300 hover:border-brand-blue focus-within:border-brand-blue"
        }
        focus-within:ring-2 focus-within:ring-brand-blue/30
      `}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full outline-none bg-transparent"
      />
    </div>

    {error && (
      <span className="text-xs text-red-500">
        {error}
      </span>
    )}
  </div>
);

export default ContactForm;



{/* <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-8 lg:px-12">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">

    <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:gap-4"
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xl leading-[1.6] font-medium text-black dark:text-white">
              Full Name
            </label>
            <div
              className={`rounded-[40px] border ${errors.firstName ? "border-red-500" : "border-gray-300"} bg-white p-2.5 shadow-md dark:border-white/20 dark:bg-gray-800`}
            >
              <input
                type="text"
                placeholder="Enter full name"
                value={formData.firstName}
                onChange={(e) =>
                  handleInputChange("firstName", e.target.value)
                }
                className="w-full bg-transparent text-xl leading-[1.6] sm:text-base text-black placeholder-black/50 outline-none dark:text-white dark:placeholder-white/50"
              />
            </div>
            {errors.firstName && (
              <span className="text-xs text-red-500">
                {errors.firstName}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xl leading-[1.6] font-medium text-black dark:text-white">
              Email
            </label>
            <div
              className={`rounded-[40px] border ${errors.email ? "border-red-500" : "border-gray-300"} bg-white p-2.5 shadow-md dark:border-white/20 dark:bg-gray-800`}
            >
              <input
                type="email"
                placeholder="name@mycompany.com"
                value={formData.email}
                onChange={(e) =>
                  handleInputChange("email", e.target.value)
                }
                className="w-full bg-transparent text-xl leading-[1.6] sm:text-base text-black placeholder-black/50 outline-none dark:text-white dark:placeholder-white/50"
              />
            </div>
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

          <div className="col-span-1 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-black dark:text-white">
              WhatsApp Number
            </label>
            <div
              className={`rounded-[40px] border ${errors.whatsappNumber ? "border-red-500" : "border-gray-300"} bg-white p-2.5 shadow-md dark:border-white/20 dark:bg-gray-800`}
            >
              <div className="flex items-center gap-2">
                <div className="relative dropdown-container">
                  <button
                    type="button"
                    onClick={() => {
                      setShowWhatsappCountryDropdown(
                        !showWhatsappCountryDropdown,
                      );
                      setShowCountryDropdown(false);
                      setShowBudgetDropdown(false);
                    }}
                    className="flex items-center gap-1 px-2 py-1 text-sm text-black dark:text-white"
                  >
                    <span className="text-xl">🇮🇳</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {showWhatsappCountryDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg shadow-lg z-20 min-w-[200px]">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setWhatsappCountryCode(
                              country.code === "in"
                                ? "+91"
                                : country.code === "us"
                                  ? "+1"
                                  : "+44",
                            );
                            setShowWhatsappCountryDropdown(false);
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-sm text-black dark:text-white"
                        >
                          <span>{country.flag}</span>
                          <span>{country.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  placeholder="01 23 45 67 89"
                  value={formatWhatsAppNumber(
                    formData.whatsappNumber,
                  )}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    handleInputChange("whatsappNumber", value);
                  }}
                  className="flex-1 bg-transparent text-sm sm:text-base text-black placeholder-black/50 outline-none dark:text-white dark:placeholder-white/50"
                />
              </div>
            </div>
            {errors.whatsappNumber && (
              <span className="text-xs text-red-500">
                {errors.whatsappNumber}
              </span>
            )}
          </div>


          <div className="col-span-1 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-black dark:text-white">
              Telegram ID
            </label>
            <div className="rounded-[40px] border border-gray-300 bg-white p-2.5 shadow-md dark:border-white/20 dark:bg-gray-800">
              <input
                type="text"
                placeholder="Enter Telegram ID"
                value={formData.telegramId}
                onChange={(e) =>
                  handleInputChange("telegramId", e.target.value)
                }
                className="w-full bg-transparent text-sm sm:text-base text-black placeholder-black/50 outline-none dark:text-white dark:placeholder-white/50"
              />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-black dark:text-white">
              Select Country
            </label>
            <div className="relative dropdown-container">
              <div className="rounded-[40px] border border-gray-300 bg-white p-2.5 shadow-md dark:border-white/20 dark:bg-gray-800">
                <button
                  type="button"
                  onClick={() => {
                    setShowCountryDropdown(!showCountryDropdown);
                    setShowBudgetDropdown(false);
                    setShowWhatsappCountryDropdown(false);
                  }}
                  className="w-full flex items-center justify-between text-sm sm:text-base text-black dark:text-white"
                >
                  <span>
                    {
                      countries.find(
                        (c) => c.code === formData.country,
                      )?.flag
                    }{" "}
                    {countries.find(
                      (c) => c.code === formData.country,
                    )?.name || "United States"}
                  </span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {showCountryDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          country: country.code,
                        }));
                        setShowCountryDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-sm text-black dark:text-white"
                    >
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-black dark:text-white">
              Budget
            </label>
            <div className="relative dropdown-container">
              <div className="rounded-[40px] border border-gray-300 bg-white p-2.5 shadow-md dark:border-white/20 dark:bg-gray-800">
                <button
                  type="button"
                  onClick={() => {
                    setShowBudgetDropdown(!showBudgetDropdown);
                    setShowCountryDropdown(false);
                    setShowWhatsappCountryDropdown(false);
                  }}
                  className="w-full flex items-center justify-between text-sm sm:text-base text-black dark:text-white"
                >
                  <span>{formData.budget}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {showBudgetDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-white/20 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                  {budgets.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          budget,
                        }));
                        setShowBudgetDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm text-black dark:text-white"
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-black dark:text-white">
            Describe Your Project
          </label>
          <div className="rounded-[20px] border border-gray-300 bg-white p-2 shadow-md dark:border-white/20 dark:bg-gray-800">
            <textarea
              placeholder="Write down all the details here"
              rows={5}
              value={formData.projectDescription}
              onChange={(e) =>
                handleInputChange(
                  "projectDescription",
                  e.target.value,
                )
              }
              className="w-full bg-transparent text-sm sm:text-base text-black placeholder-black/50 outline-none resize-none dark:text-white dark:placeholder-white/50"
            ></textarea>
          </div>
        </div>


        <button
          type="submit"
          className="mt-1 w-fit flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-blue/90 shadow-sm sm:px-8 sm:py-3 sm:text-base"
        >
          Submit
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </form>
    </div>


    <div className="hidden lg:block lg:col-span-1"></div>

    <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">

      <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-2.5 shadow-sm dark:border-white/20 dark:bg-gray-800">
        <div className="flex h-8 w-8 items-center justify-center flex-shrink-0">
          <svg
            className="h-4 w-4 text-brand-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
        <p className="font-heading text-sm sm:text-base font-normal text-black dark:text-white">
          +91 xxxxx xxxxx
        </p>
      </div>

      <div className="flex items-center gap-3 rounded-lg border border-gray-300 bg-white p-2.5 shadow-sm dark:border-white/20 dark:bg-gray-800">
        <div className="flex h-8 w-8 items-center justify-center flex-shrink-0">
          <svg
            className="h-4 w-4 text-brand-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="font-heading text-xl leading-[1.6] sm:text-base font-normal text-black dark:text-white">
          blockchainappadvisor@gmail.com
        </p>
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-gray-300 bg-white p-2.5 shadow-sm dark:border-white/20 dark:bg-gray-800">
        <div className="flex h-10 w-10 items-center justify-center flex-shrink-0 mt-1">
          <svg
            className="h-5 w-5 text-brand-blue"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <p className="font-heading text-xl leading-[1.6] sm:text-base font-normal text-black dark:text-white">
          Address...
        </p>
      </div>
    </div>
  </div>
</div>  */}
import { Helmet } from "react-helmet";

import React, { useState, useEffect } from 'react';

const Contact = () => {
  /* ===================== STATES ===================== */

  const initialFormState = {
    firstName: '',
    email: '',
    whatsappNumber: '',
    telegramId: '',
    country: 'us',
    budget: 'Still Evaluating',
    projectDescription: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [showWhatsappCountryDropdown, setShowWhatsappCountryDropdown] = useState(false);

  const [whatsappCountryCode, setWhatsappCountryCode] = useState('+91');

  /* ===================== DATA ===================== */

  const countries = [
    { code: 'us', name: 'United States', flag: '🇺🇸', dial: '+1' },
    { code: 'in', name: 'India', flag: '🇮🇳', dial: '+91' },
    { code: 'uk', name: 'United Kingdom', flag: '🇬🇧', dial: '+44' },
    { code: 'ca', name: 'Canada', flag: '🇨🇦', dial: '+1' },
    { code: 'au', name: 'Australia', flag: '🇦🇺', dial: '+61' },
  ];

  const budgets = [
    'Still Evaluating',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
  ];

  /* ===================== VALIDATION ===================== */

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateWhatsApp = (number) =>
    number.replace(/\D/g, '').length === 10;

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const formatWhatsAppNumber = (value) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 10);
    return cleaned.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = 'Full name is required';

    if (!formData.email.trim())
      newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email))
      newErrors.email = 'Invalid email address';

    if (!formData.whatsappNumber.trim())
      newErrors.whatsappNumber = 'WhatsApp number is required';
    else if (!validateWhatsApp(formData.whatsappNumber))
      newErrors.whatsappNumber = 'Must be 10 digits';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        console.log('Form Submitted:', formData);
        setLoading(false);
        setFormData(initialFormState);
        alert('Form submitted successfully!');
      }, 1000);
    }
  };

  /* ===================== CLOSE DROPDOWNS ===================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setShowCountryDropdown(false);
        setShowBudgetDropdown(false);
        setShowWhatsappCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  /* ===================== JSX ===================== */

  return (
    <>
  <Helmet>
    <title>Contact Blockchain App Advisor | Blockchain & AI Experts</title>

    <meta
      name="description"
      content="Contact Blockchain App Advisor for blockchain development, AI solutions, Web3, DeFi, NFT marketplace, and smart contract development. Get a free consultation today."
    />

    <meta
      name="keywords"
      content="contact blockchain developer, AI development consultation, Web3 company contact, DeFi development company"
    />

    <link
      rel="canonical"
      href="https://yourdomain.com/contact"
    />
  </Helmet>



    <div className="w-full bg-white dark:bg-black">

      {/* ===== HEADING ===== */}
      <section className="pt-14">
        <div className="mx-auto max-w-layout px-6">
          <h1 className="text-center font-heading text-[36px] font-extrabold uppercase text-black dark:text-white md:text-[44px] lg:text-[76px]">
            GET IN TOUCH WITH{' '}
            <span className="text-brand-blue">
              BLOCKCHAIN APP ADVISOR
            </span>
          </h1>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section id="contact-form" className="pt-14 pb-20">
        <div className="mx-auto max-w-layout px-4 sm:px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* LEFT FORM */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div>
                    <label className="text-sm font-medium text-black dark:text-white">
                      Full Name
                    </label>
                    <div className={`rounded-[40px] border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} bg-white p-2.5 shadow-md dark:bg-gray-800`}>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange('firstName', e.target.value)
                        }
                        className="w-full bg-transparent outline-none dark:text-white"
                      />
                    </div>
                    {errors.firstName && (
                      <span className="text-xs text-red-500">
                        {errors.firstName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-black dark:text-white">
                      Email
                    </label>
                    <div className={`rounded-[40px] border ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-white p-2.5 shadow-md dark:bg-gray-800`}>
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        className="w-full bg-transparent outline-none dark:text-white"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-xs text-red-500">
                        {errors.email}
                      </span>
                    )}
                  </div>

                </div>

                {/* WHATSAPP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* WhatsApp Number */}
                  <div>
                    <label className="text-sm font-medium text-black dark:text-white">
                      WhatsApp Number
                    </label>

                    <div className={`rounded-[40px] border ${errors.whatsappNumber ? 'border-red-500' : 'border-gray-300'} bg-white p-2.5 shadow-md dark:bg-gray-800 flex items-center gap-2`}>

                      <div className="relative dropdown-container">
                        <button
                          type="button"
                          onClick={() =>
                            setShowWhatsappCountryDropdown(!showWhatsappCountryDropdown)
                          }
                          className="flex items-center gap-1 text-black dark:text-white"
                        >
                          {
                            countries.find(
                              (c) => c.dial === whatsappCountryCode
                            )?.flag
                          }
                        </button>

                        {showWhatsappCountryDropdown && (
                          <div className="absolute top-full mt-1 bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-20 min-w-[180px]">
                            {countries.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                onClick={() => {
                                  setWhatsappCountryCode(country.dial);
                                  setShowWhatsappCountryDropdown(false);
                                }}
                                className="block w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                {country.flag} {country.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <input
                        type="tel"
                        placeholder="01 23 45 67 89"
                        value={formatWhatsAppNumber(formData.whatsappNumber)}
                        onChange={(e) =>
                          handleInputChange(
                            'whatsappNumber',
                            e.target.value.replace(/\D/g, '').slice(0, 10)
                          )
                        }
                        className="flex-1 bg-transparent outline-none dark:text-white"
                      />
                    </div>

                    {errors.whatsappNumber && (
                      <span className="text-xs text-red-500">
                        {errors.whatsappNumber}
                      </span>
                    )}
                  </div>
                  <div className="col-span-1 flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-black dark:text-white">Telegram ID</label>
                    <div className="rounded-[40px] border border-gray-300 bg-white p-2.5 shadow-md dark:border-white/20 dark:bg-gray-800">
                      <input
                        type="text"
                        placeholder="Enter Telegram ID"
                        value={formData.telegramId}
                        onChange={(e) => handleInputChange('telegramId', e.target.value)}
                        className="w-full bg-transparent text-sm sm:text-base text-black placeholder-black/50 outline-none dark:text-white dark:placeholder-white/50"
                      />
                    </div>
                  </div>
                </div>
                {/* BUDGET */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-black dark:text-white">Select Country</label>
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
                          <span>{countries.find(c => c.code === formData.country)?.flag} {countries.find(c => c.code === formData.country)?.name || 'United States'}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                                setFormData(prev => ({ ...prev, country: country.code }));
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
                  <div className="dropdown-container relative">
                    <label className="text-sm font-medium text-black dark:text-white">
                      Budget
                    </label>

                    <button
                      type="button"
                      onClick={() =>
                        setShowBudgetDropdown(!showBudgetDropdown)
                      }
                      className="w-full rounded-[40px] border border-gray-300 bg-white p-2.5 shadow-md text-left dark:bg-gray-800 dark:text-white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <span>{formData.budget}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {showBudgetDropdown && (
                      <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-20">
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
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-medium text-black dark:text-white">
                    Describe Your Project
                  </label>

                  <div className="rounded-[20px] border border-gray-300 bg-white p-2 shadow-md dark:bg-gray-800">
                    <textarea
                      rows={5}
                      placeholder="Write down all the details here"
                      value={formData.projectDescription}
                      onChange={(e) =>
                        handleInputChange(
                          'projectDescription',
                          e.target.value
                        )
                      }
                      className="w-full bg-transparent outline-none resize-none dark:text-white"
                    />
                  </div>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-fit rounded-lg bg-brand-blue px-6 py-3 text-white font-semibold hover:bg-brand-blue/90 disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>

              </form>
            </div>

            {/* RIGHT INFO */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="rounded-lg border p-4 dark:border-white/20 dark:bg-gray-800">
                +91 xxxxx xxxxx
              </div>

              <div className="rounded-lg border p-4 dark:border-white/20 dark:bg-gray-800">
                contact@blockchainappadvisor.com
              </div>

              <div className="rounded-lg border p-4 dark:border-white/20 dark:bg-gray-800">
                Address...
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16 text-center">
        <h2 className="text-3xl font-bold text-white">
          Ready To Start Your Project?
        </h2>
        <button
          onClick={scrollToForm}
          className="mt-6 border-2 border-white px-6 py-3 text-white rounded-lg hover:bg-white hover:text-brand-blue"
        >
          Contact Us
        </button>
      </section>

    </div>
    </>
  );
};

export default Contact;

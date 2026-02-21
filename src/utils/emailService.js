import emailjs from "@emailjs/browser";

export const sendContactEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      "service_xwlixw9",   // EmailJS → Email Services → Service ID
      "template_fgadw4v",  // EmailJS → Email Templates → Template ID
      {
        firstName: formData.firstName,
        lastName: formData.lastName || "",
        email: formData.email,
        whatsappNumber: formData.whatsappNumber || "",
        telegramId: formData.telegramId || "",
        country: formData.country || "",
        budget: formData.budget || "",
        projectDescription: formData.projectDescription || "",
      },
      "RBud6t59udKtkSaME" // ✅ Tumhara PUBLIC KEY (screenshot wala)
    );

    console.log("Email sent:", result);

    return {
      success: true,
      message: "Email sent successfully!"
    };

  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again."
    };
  }
};

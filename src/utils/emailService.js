import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
export const sendContactEmail = async (formData) => {
  try {

    // 1️⃣ ADMIN EMAIL
    await emailjs.send(
      "service_xwlixw9",
      "template_fgadw4v",
      {
        firstName: formData.firstName,
        email: formData.email,
        whatsappNumber: formData.whatsappNumber || "",
        telegramId: formData.telegramId || "",
        country: formData.country || "",
        budget: formData.budget || "",
        projectDescription: formData.projectDescription || "",
      },
      "RBud6t59udKtkSaME"
    );

    // 2️⃣ THANK YOU EMAIL TO USER
    await emailjs.send(
      "service_xwlixw9",
      "template_c346b8i",  // 👈 new template id
      {
        firstName: formData.firstName,
        email: formData.email,
      },
      "RBud6t59udKtkSaME"
    );

// console.log("Thank you email response:");
  Swal.fire({
      icon: "success",
      title: "Message Sent Successfully",
      text: "Thank you for contacting us. Our team will get back to you shortly.",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      showCloseButton: true,
    });

    return {
      success: true,
      message: "Email sent successfully!"
    };

  } catch (error) {
    console.error("EmailJS Error:", error);

    // ❌ ERROR POPUP
    Swal.fire({
      icon: "error",
      title: "Something went wrong",
      text: "Failed to send your message. Please try again.",
      confirmButtonColor: "#2563eb",
      showCloseButton: true,
    });

    return {
      success: false,
      message: "Failed to send email."
    };
  }
};
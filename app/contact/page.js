"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_y9erv7q";
    const templateId = "template_4q6vbah";
    const publicKey = "KXnzGnO6gulY7h8I3";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        publicKey
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Error sending message. Please try again later.");
        }
      );
  };

  return (
    <section className="max-w-md mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center text-indigo-400">
        Get in Touch
      </h1>
      <p className="text-gray-400 text-center text-sm">
        I’d love to hear from you! Whether you have questions, want to discuss
        an opportunity, or just say hello, please drop a message.
      </p>

      <form
        onSubmit={sendEmail}
        className="bg-gray-800 bg-opacity-60 rounded-lg p-6 shadow-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 bg-gray-900 text-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 bg-gray-900 text-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-200">
            Message
          </label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows="4"
            required
            className="w-full border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 bg-gray-900 text-gray-100"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition-transform transform hover:-translate-y-1 shadow-md"
        >
          Send Message
        </button>
        {status && (
          <p className="text-center text-sm mt-2 text-gray-300">{status}</p>
        )}
      </form>
    </section>
  );
}

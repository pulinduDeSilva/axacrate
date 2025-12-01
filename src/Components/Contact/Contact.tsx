import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Contact.module.css";
import featureBg from "../../assets/featureBg.png";


interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            // Replace this with actual email sending logic (EmailJS, API call, etc.)
            console.log("Sending email:", formData);
            setTimeout(() => {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            }, 1000);
        } catch (error) {
            setStatus("Failed to send message. Please try again.");
        }
    };

    return (
        <>
            <section className= {styles["contact-section"]}>
                <img className={styles["bg"]} src={featureBg} alt="Contact us BG" />
                <div className={styles.contactContainer}>
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Send Message</button>
                    </form>
                    {status && <p className={styles.status}>{status}</p>}
                </div>
            </section>

        </>

    );
};

export default ContactUs;

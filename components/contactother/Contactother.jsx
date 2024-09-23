import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.background} />

      <div style={styles.card}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.description}>
          Have a question or need more information? Don&apos;t hesitate to reach
          out.
        </p>

        <div style={styles.contactList}>
          <ContactItem
            href="mailto:your@email.com"
            text="Email: your@email.com"
          />
          <ContactItem
            href="tel:+1234567890"
            text={<span style={styles.boldText}>Call: +123 456 7890</span>}
          />
          <ContactItem
            href="https://www.yourwebsite.com"
            text="Visit Website: yourwebsite.com"
          />
        </div>

        <div style={styles.socialMediaContainer}>
          <SocialMediaLink href="https://www.facebook.com" text="Facebook" />
          <SocialMediaLink href="https://www.twitter.com" text="Twitter" />
          <SocialMediaLink href="https://www.instagram.com" text="Instagram" />
          <SocialMediaLink href="https://www.linkedin.com" text="LinkedIn" />
        </div>
      </div>
    </div>
  );
}

const ContactItem = ({ href, text }) => (
  <div style={styles.contactItem}>
    <a href={href} style={styles.link}>
      {text}
    </a>
  </div>
);

const SocialMediaLink = ({ href, text }) => (
  <Link href={href} style={styles.socialLink}>
    {text}
  </Link>
);

const styles = {
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    marginTop: "10rem", // Adjust for larger screens if needed
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundImage: 'url("/result/contactTwo.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    filter: "blur(10px)",
  },
  card: {
    position: "relative",
    zIndex: 10,
    color: "white",
    textAlign: "center",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    maxWidth: "400px",
    margin: "auto",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1e3a8a",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "1rem",
    color: "black",
  },
  contactList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s",
  },
  link: {
    fontSize: "1rem",
  },
  boldText: {
    fontWeight: "bold",
    color: "black",
  },
  socialMediaContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  socialLink: {
    color: "white",
    fontSize: "1rem",
    textDecoration: "none",
    transition: "color 0.2s",
  },
};

export default Contact;

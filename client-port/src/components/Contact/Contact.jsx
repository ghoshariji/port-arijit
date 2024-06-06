import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";
export const Contact = () => {
  const [post, setPost] = useState({
    name:  "",
    email: "",
    message: "",
  });
  const handleInput = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await axios.post(
        "https://portfolio-ymdt.onrender.com/api/contact/save",
        post,
        config
      );
      if (data.data.success) {
        toast.success("Submitted");
      }
    } catch (error) {
      console.log("Error" + error);
    }
  };
  const getServer = async () => {
    try {
      const data = await axios.get("https://portfolio-ymdt.onrender.com");
    } catch (error) {}
  };
  useEffect(() => {
    getServer();
  }, []);
  return (
    <footer id="contact" className={styles.container}>
      <ToastContainer />
      <div className={styles.text}>
        <p>Feel free to reach out!</p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={post.name}
              onChange={handleInput}
              placeholder="Arijit Ghosh"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={post.email}
              onChange={handleInput}
              placeholder="arijit1087.be22@chitkarauniversity.edu.in"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={post.message}
              onChange={handleInput}
              placeholder="Hii Ariji...."
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <Link to="mailto:arijit1087.be22@chitkarauniversity.edu.in">
            arijit1087.be22@chitkarauniversity.edu.in
          </Link>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <Link to="https://www.linkedin.com/in/arijit-ghosh-417316255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            Arijit Ghosh
          </Link>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <Link to="https://www.github.com/ghoshariji">
            github.com/ghoshariji
          </Link>
        </li>
      </ul>
    </footer>
  );
};

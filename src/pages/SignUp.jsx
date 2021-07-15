import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pageAnimationSign } from "../animation";
function SignUp() {
  const urlPost = "https://api-test.nikdiba.com/nikdiba/api/test/register";
  const msgsuccess = document.querySelector(".msg-success");
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "12345678",
  });
  function inpChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  async function formSub(e) {
    e.preventDefault();
    const msgdanger = document.querySelector(".danger p");
    const danger = document.querySelector(".danger");
    await axios({
      method: "post",
      url: urlPost,
      headers: {
        "content-type": "application/json",
      },
      data: {
        email: data.email,
        mobile: data.mobile.toString(),
        name: data.name,
        password: data.password,
      },
    })
      .then((res) => {
        danger.classList.remove("show");
        msgsuccess.classList.add("msg-success-show");
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.errors) {
          msgdanger.innerText = `${err.response.data.errors[0].title}    ${err.response.data.errors[0].detail}`;
        } else {
          msgdanger.innerText = `${err.response.data.message}`;
        }

        danger.classList.add("show");
        console.log(err);
      });
  }
  return (
    <motion.div
      variants={pageAnimationSign}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="msg-success">
        <div className="msg-card">
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 415.869 415.869"
            width="70px"
            height="70px"
          >
            <path
              style={{ fill: "#00BBD3" }}
              d="M193.306,282.645L193.306,282.645c-4.702,0-8.882-2.09-11.494-5.224l-78.89-85.682
	c-5.747-6.269-5.224-16.196,1.045-21.943c6.269-5.747,16.196-5.224,21.943,1.045l67.918,73.665L381.91,56.947
	c6.269-6.269,16.196-6.269,21.943,0c5.747,6.269,6.269,16.196,0,21.943L204.278,277.943
	C201.665,281.078,197.486,282.645,193.306,282.645z"
            />
            <path
              style={{ fill: "#3A2C51" }}
              d="M207.935,415.869C93.518,415.869,0,322.351,0,207.935S93.518,0,207.935,0
	c8.882,0,15.673,6.792,15.673,15.673s-6.792,15.673-15.673,15.673c-97.176,0-176.588,79.412-176.588,176.588
	s79.412,176.588,176.588,176.588s176.588-79.412,176.588-176.588c0-8.882,6.792-15.673,15.673-15.673s15.673,6.792,15.673,15.673
	C415.869,322.351,322.351,415.869,207.935,415.869z"
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
          <p>ثبت نام شما با موفقیت انجام شد</p>
          <Link to="/">ورود به حساب کاربری</Link>
        </div>
      </div>
      <div className="sign-login">
        <div className="sign-login-card">
          <h2>ثبت نام</h2>
          <form onSubmit={(e) => formSub(e)}>
            <div className="danger">
              <p></p>
            </div>
            <div className="form-input">
              <input
                onChange={(e) => inpChange(e)}
                type="text"
                value={data.name}
                name="name"
                id="name"
                required
              />
              <span></span>
              <label htmlFor="name">نام و نام خوانوادگی</label>
            </div>
            <div className="form-input">
              <input
                onChange={(e) => inpChange(e)}
                type="email"
                name="email"
                value={data.email}
                id="email"
                required
              />
              <span></span>
              <label htmlFor="email">ایمیل</label>
            </div>
            <div className="form-input">
              <input
                onChange={(e) => inpChange(e)}
                type="tel"
                name="mobile"
                value={data.mobile}
                id="mobile"
                required
              />
              <span></span>
              <label htmlFor="mobile">شماره موبایل</label>
            </div>
            <input type="submit" value="عضویت" />
            <div className="sign-login-link">
              <p>
                قبلا ثبت نام کرده اید؟ <Link to="/">ورود</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default SignUp;

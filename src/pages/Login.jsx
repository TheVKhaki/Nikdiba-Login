import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
//Animation
import { motion } from "framer-motion";
import { pageAnimationLogin } from "../animation";

function Login(props) {
  const urlPost = "https://api-test.nikdiba.com/nikdiba/api/test/login";
  const history = useHistory();
  //save data Login
  const [data, setData] = useState({
    captcha: "string",
    mobile: "",
    password: "12345678",
  });
  //get value inp
  function inpChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  //Form submit and send data
  async function formSub(e) {
    e.preventDefault();
    const danger = document.querySelector(".danger");
    await axios({
      method: "post",
      url: urlPost,
      headers: {
        "content-type": "application/json",
      },
      data: {
        captcha: data.captcha,
        mobile: data.mobile.toString(),
        password: data.password,
      },
    })
      //success
      .then((res) => {
        danger.classList.remove("show");
        history.push("userpanel");
        const newPanelData = { ...props.panelData };
        newPanelData.name = res.data.data.user.name;
        newPanelData.email = res.data.data.user.email;
        newPanelData.mobile = res.data.data.user.mobile;
        newPanelData.id = res.data.data.user.id;
        props.setPanelData(newPanelData);
        console.log(newPanelData);
      })
      //error
      .catch((res) => {
        danger.classList.add("show");
      });
  }
  return (
    <motion.div
      variants={pageAnimationLogin}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="sign-login">
        <div className="sign-login-card">
          <h2>ورود</h2>
          <form onSubmit={(e) => formSub(e)}>
            <div className="danger">
              <p>شماره موبایل را اشتباه وارد کرده اید</p>
            </div>
            <div className="form-input">
              <input
                type="tel"
                value={data.mobile}
                id="mobile"
                onChange={(e) => inpChange(e)}
                required
              />
              <span></span>
              <label htmlFor="mobile">شماره موبایل</label>
            </div>
            <input type="submit" value="ورود" />
            <div className="sign-login-link">
              <p>
                واقعا اکانت نداری؟؟ <Link to="/signup">ثبت نام</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;

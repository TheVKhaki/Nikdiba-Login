import React from "react";
import { Link } from "react-router-dom";
//Animation
import { motion } from "framer-motion";
import { pageAnimationPanel } from "../animation";

function UserPanel(props) {
  return (
    <motion.div
      variants={pageAnimationPanel}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="user-panel">
        <div className="user-panel-card">
          <h2>پنل کاربری</h2>
          <form>
            <div className="form-input">
              <input
                type="text"
                value={props.panelData.name}
                name="name"
                id="name"
                required
              />
              <span></span>
              <label htmlFor="name">نام و نام خوانوادگی</label>
            </div>
            <div className="form-input">
              <input
                type="email"
                name="email"
                value={props.panelData.email}
                id="email"
                required
              />
              <span></span>
              <label htmlFor="email">ایمیل</label>
            </div>
            <div className="form-input">
              <input
                type="tel"
                name="mobile"
                value={props.panelData.mobile}
                id="mobile"
                required
              />
              <span></span>
              <label htmlFor="mobile">شماره موبایل</label>
            </div>
          </form>
          <Link to="/">بازگشت</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default UserPanel;

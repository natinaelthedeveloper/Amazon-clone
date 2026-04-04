import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footer_container}>
          <div className={classes.first_list}>
            <p>
              <b>Get to Know Us</b>
            </p>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">About Amazon</a>
            <a href="#">Investor Relations</a>
            <a href="#">Amazon Devices</a>
            <a href="#">Amazon Science</a>
          </div>
          <div className={classes.second_list}>
            <p>
              <b>Make Money with Us</b>
            </p>
            <a href="#">Sell on Amazon</a>
            <a href="#">Sell under Amazon Brand Store</a>
            <a href="#">Supply Chain Management</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Advertise Your Products</a>
            <a href="#">Self-Publish with Us</a>
          </div>
          <div className={classes.third_list}>
            <p>
              <b>Amazon Payment Products</b>
            </p>
            <a href="#">Amazon Business Card</a>
            <a href="#">Shop with Points</a>
            <a href="#">Reload Your Balance</a>
            <a href="#">Amazon Currency Converter</a>
          </div>
          <div className={classes.fourth_list}>
            <p>
              <b>Let Us Help You</b>
            </p>
            <a href="#">Amazon and COVID-19</a>
            <a href="#">Your Account</a>
            <a href="#">Your Orders</a>
            <a href="#">Shipping Rates & Policies</a>
            <a href="#">Returns & Replacements</a>
            <a href="#">Manage Your Content and Devices</a>
          </div>
        </div>
        <hr />
        <div className={classes.footer_bottom}>
          <div className={classes.footer_logo}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon-logo"
            />
          </div>
          <div className={classes.footer_copyright}>
            <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

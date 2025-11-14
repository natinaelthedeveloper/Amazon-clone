import React from "react";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <a href="/">
              <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon log"
              />
            </a>
            <div className={classes.delivery}>
              <span>
                <FmdGoodOutlinedIcon />
              </span>
              <div>
                <p>Delivered to </p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <section name="" id="">
              <option value="">All</option>
            </section>
            <input type="text" />
            <SearchIcon size={25} />
          </div>
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <section>
                <option value="">EN</option>
              </section>
            </a>

            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <ShoppingCartOutlinedIcon size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;

import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from 'react-icons/sl';
import {BiCart} from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
const [{user, basket }, dispatch] = useContext(DataContext);
const totalItem = basket?.reduce((amount, item)=>{
  return item.amount + amount;
}, 0)
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon log"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to </p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <section name="" id="">
              <a href="#">All▼</a>
            </section>
            <input type="text" />
            <BsSearch size={38} />
          </div>
          <div className={classes.order_container}>
            <a href="#" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png"
                alt=""
              />
              <section>
                <option value="">EN</option>
              </section>
            </a>

            <Link to={!user && "/Auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            <Link to="/Orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/Cart" className={classes.cart}>
              <BiCart size={25} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;

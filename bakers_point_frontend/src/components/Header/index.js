import React, { useEffect, useState } from "react";
import "./style.css";
import chefIcon from "../../images/logo/chef.png";
import goldenStar from "../../images/logo/golden-star.png";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { login, signout, Signup } from "../../actions";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userSignUp = () => {
    dispatch(Signup({ firstName, lastName, email, password }));
  };


  const userLogin = () => {
    dispatch(login({ email, password }));
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="loginButton">{auth.user.fullName}</a>}
        menus={[
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
          },
          { label: "Logout", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
          className="loginButton"
          onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}>

            Login
          </a>
        }
        menus={[
          {
            label: "Orders",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
             onClick={()=>{
               setLoginModal(true);
               setSignup(true);
             }}
             style={{ color: "#be5683" }}>Sign Up</a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Signup-Signin</h2>
              <p>Please login to place orders</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
              {signup && (
                <MaterialInput
                type="text"
                label="Enter First Name"
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
              />
              )}
              {signup && (
                <MaterialInput
                type="text"
                label="Enter Last Name"
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
              />
              )}

                <MaterialInput
                  type="text"
                  label="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MaterialInput
                  type="password"
                  label="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
              {!signup && (
                 < MaterialButton
                 title="Login"
                 bgColor="#dab8f3"
                 textColor="#ffffff"
                 style={{
                   margin: "40px 0 20px 0",
                 }}
                onClick={userLogin}
              />

              )}

              {signup && (
              <MaterialButton
              title="Sign Up"
              bgColor="#dab8f3"
              textColor="#ffffff"
              style={{
                margin: "40px 0 20px 0",
              }}
              onClick={userSignUp}
            />
            )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        <span className = "baker"> Bakers' Point</span>
        {/* Logo  */}
        <div className="logo">
          <a href="">
            <img src={chefIcon} className="logoimage" alt="" />
          </a>
        {/*  <a style={{ marginTop: "-10px" }}>
            <span className="exploreText">Explore</span>
            <span className="plusText">Plus</span>
            <img src={goldenStar} className="goldenStar" alt="" />
          </a> */}
        </div>
        {/* logo ends here */}

        {/* search component */}
        <div
          style={{
            padding: "0 10px",
          }}
        >
        {/*  <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"search for your favourite food"}
            />
            <div className="searchIconContainer">
              <IoIosSearch
                style={{
                  color: "#2874f0",
                }}
              />
            </div>
          </div> */}
        </div>
        {/* search component ends here */}

        {/* right side menu */}
        <div className="rightMenu">
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: "Register as a Baker", href: "http://localhost:4000/signin", icon: null },
            ]}
          />
          <div>
            <a href={`/cart`} className="cart">
              <IoIosCart />
              <span style={{ margin: "0 10px" }}>Cart</span>
            </a>
          </div>
        </div>
        {/* right side menu ends here */}
      </div>
    </div>
  );
};

export default Header;

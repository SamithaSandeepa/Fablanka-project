import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { MDBIcon } from "mdb-react-ui-kit";
import Styles from "../styles/Navbar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(logout());
  };

  const authLinks = (
    <>
      <li className="nav-item px-3">
        <Link href="/admin/dashboard">
          <a
            className={
              router.pathname === "/admin/dashboard"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Dashboard
          </a>
        </Link>
      </li>

      {/* home Pages */}

      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Home Pages
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item dropdown px-3">
            <li className="nav-item px-3">
              <Link href="/">
                <a
                  className={
                    router.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link href="/industrytec">
                <a
                  className={
                    router.pathname === "/industrytec"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Industry 4.0 Technologies
                </a>
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link href="/education">
                <a
                  className={
                    router.pathname === "/education"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Education
                </a>
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link href="/#">
                <a
                  className={
                    router.pathname === "/project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Project
                </a>
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link href="/contact">
                <a
                  className={
                    router.pathname === "/contect"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contect Us  
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown px-3">
              <button className="peer bg-transparent hover:bg-green-700 border-none text-slate-400 outline-none">
                FabLab
              </button>
              <div
                className="hidden peer-hover:flex hover:flex
         w-[200px] ml-5
         flex-col bg-transparent drop-shadow-lg "
              >
                <a className="no-underline" href="/fablabs/makadura">
                  makadura
                </a>
              </div>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdownMenuLink1"
              >
                <li className="dropdown-item px-2">
                  <Link href="/fablabs/makadura">
                    <a
                      className={
                        router.pathname === "/fablabs/makadura"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      FabLab Makadura
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item px-3">
              <Link href="/about">
                <a
                  className={
                    router.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About Us
                </a>
              </Link>
            </li>
          </li>
        </ul>
      </li>

      {/* News admin pannel links */}
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          News Details
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item px-3">
            <Link href="/admin/news/add">
              <a
                className={
                  router.pathname === "/admin/news/add"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Add News
              </a>
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link href="/admin/news/all">
              <a
                className={
                  router.pathname === "/admin/news/all"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                News
              </a>
            </Link>
          </li>
        </ul>
      </li>

      {/* PastEvent admin pannel links */}
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Past Event Details
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item px-3">
            <Link href="/admin/pastevents/add">
              <a
                className={
                  router.pathname === "/admin/pastevents/add"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Add Event
              </a>
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link href="/admin/pastevents/all">
              <a
                className={
                  router.pathname === "/admin/pastevents/all"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Past Events
              </a>
            </Link>
          </li>
        </ul>
      </li>


      {/* OurProject admin pannel links */}
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          OurProject Details
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item px-3">
            <Link href="/admin/ourproject/add">
              <a
                className={
                  router.pathname === "/admin/ourproject/add"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Add OurProject
              </a>
            </Link>
          </li>
          <li className="nav-item px-3">
            <Link href="/admin/ourproject/all">
              <a
                className={
                  router.pathname === "/admin/ourproject/all"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                OurProject
              </a>
            </Link>
          </li>
        </ul>
      </li>



      <li className="nav-item px-3">
        <Link href="/fabtech">
          <a
            className={
              router.pathname === "/fabtech" ? "nav-link active" : "nav-link"
            }
          >
            FabTech Event
          </a>
        </Link>
      </li>

      {/* logout and register links */}
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Login
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item px-3">
            <Link href="/admin/register">
              <a
                className={
                  router.pathname === "/admin/register"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Register
              </a>
            </Link>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#!" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-item px-3">
        <Link href="/">
          <a
            className={router.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link href="/about">
          <a
            className={
              router.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About Us
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link href="/industrytec">
          <a
            className={
              router.pathname === "/industrytec"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Industry 4.0 Technologies
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link href="/education">
          <a
            className={
              router.pathname === "/education" ? "nav-link active" : "nav-link"
            }
          >
            Education
          </a>
        </Link>
      </li>
      <li className="nav-item px-3">
        <Link href="/#">
          <a
            className={
              router.pathname === "/project" ? "nav-link active" : "nav-link"
            }
          >
            Project
          </a>
        </Link>
      </li>
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          FabLabs
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item dropdown px-2">
            <Link href="/fablabs/makadura">
              <a
                className={
                  router.pathname === "/fablabs/makadura"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                FabLab Makadura
              </a>
            </Link>
          </li>
          {/* <li className="nav-item dropdown px-2">
            <Link href="/#">
              <a
                className={
                  router.pathname === "/#" ? "nav-link active" : "nav-link"
                }
              >
                Free education
              </a>
            </Link>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li> */}
        </ul>
      </li>
      <li className="nav-item px-3">
              <Link href="/contact">
                <a
                  className={
                    router.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact Us  
                </a>
              </Link>
      </li>
      <li className="nav-item px-3 ">
        <Link href="/fabtech">
          <a
            className={
              router.pathname === "/fabtech"
                ? "nav-link active"
                : "nav-link"
            }
          >
            FabTech Event
          </a>
        </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`py-3 navbar navbar-expand-lg navbar-dark bg-[#06283D] sticky-sm-top ${Styles.navbar}`}
    >
      <div className="container-fluid">
        <img
          src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/24x24.png"
          width={32}
          height={32}
          className=""
        />
        <Link href="#">
          <a className="navbar-brand pl-4">FabLanka</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <MDBIcon fas icon="bars" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

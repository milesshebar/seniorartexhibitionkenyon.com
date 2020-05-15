import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/`} >
                  Home
                </Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            {/* <img height="40px" src="https://www.kenyon.edu/files/resources/kcshield_1cu_lg.png"></img> */}
            <Link className="site-head-logo" to={`/`}>
              Senior Art Exhibition 2020
              <br />
              <span style={{ color: "rgb(186,209,60)", opacity: 0.75 }}>
                Gund Gallery at Kenyon College
              </span>
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://instagram.com/kenyonseniorart"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()}{" "}
        {/*<Link to={`/`}>{title}</Link> &mdash;
        Built by{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Miles Shebar
        </a>*/}
      </footer>
    </div>
  )
}

export default Layout

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import gatsbyLogo from "../images/gatsby-icon.png"

const NavLink = props => <Link {...props} />

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* title and logo */}
      <span style={{ display: "flex", alignItems: "center" }}>
        <img
          src={gatsbyLogo}
          alt="Icon"
          style={{
            width: "50px",
            margin: "0 5px",
            border: "3px solid orange",
            borderRadius: "50%",
          }}
        />
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </span>
      <div
        style={{ color: "white", cursor: "pointer" }}
        className="snipcart-summary snipcart-checkout"
      >
        <div>
          <strong>My Cart</strong>
        </div>
        <div>
          <span
            style={{ fontWeight: "bold" }}
            className="snipcart-total-items"
          ></span>{" "}
          Items in Cart
        </div>
        <div>
          {" "}
          Total Price{" "}
          <span
            style={{ fontWeight: "bold" }}
            className="snipcart-total-price"
          ></span>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

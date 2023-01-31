import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p>
        <a href="/" className="mx-1">
          Home
        </a>{" "}
        |{" "}
        <Link className="mx-1" to="/about-us">
          About Us
        </Link>{" "}
        |{" "}
        <Link className="mx-1" to="/terms">
          Terms
        </Link>
      </p>
      <p className="m-0">
        Copyright &copy; {new Date().getFullYear() + " "}
        <Link to="/" className="text-muted">
          ComplexApp
        </Link>
        . All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

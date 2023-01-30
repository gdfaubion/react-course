import React from "react"
import ReactDOM from "react-dom/client"

// My components
import Header from "./components/Header"
import Header from "./components/HomeGuest"
import Header from "./components/Footer"

function Main() {
  return (
    <>
      <Header />

      <HomeGuest />

      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}

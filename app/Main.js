import React from "react"
import ReactDOM from "react-dom/client"

// My components
import Header from "./components/Header"

function Main() {
  return (
    <>
      <Header />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}

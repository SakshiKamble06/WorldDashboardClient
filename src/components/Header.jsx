import React from "react";

const Header = () => {
  return (
  <header
  className="text-white text-center py-5 shadow mb-5"
  style={{
    background: "linear-gradient(135deg, #6f42c1, #d63384)",
  }}
>
      <div className="container">
        <h1 className="display-3 fw-bold mb-3">
         World Population Dashboard
        </h1>
      </div>
    </header>
  );
};

export default Header;
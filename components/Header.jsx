import React from "react";

const Header = () => {
  return (
  <header
  className="text-white text-center py-5 shadow"
  style={{
    background: "linear-gradient(135deg, #6f42c1, #d63384)",
  }}
>
      <div className="container">
        <h1 className="display-3 fw-bold mb-3">
         World Population Dashboard
        </h1>
        <p className="lead">
          Explore global population statistics and insights
        </p>
      </div>
    </header>
  );
};

export default Header;
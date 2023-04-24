import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/1007/403/desktop-wallpaper-lionel-messi-s-poster-gracias-messi-thumbnail.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/register">
              <button className="btn btn-primary">Get Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

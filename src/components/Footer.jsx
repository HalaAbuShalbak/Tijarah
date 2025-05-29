import React from "react";

const Footer = () => {
  return (
    <>
  <footer className="flex md:flex-row flex-col bottom-0 text-black w-full justify-evenly items-start md:items-center border-t-2 px-4 py-6 gap-4 md:gap-0">
  <div className="flex flex-col gap-2 text-sm text-start">
    <strong>Contact</strong>
    <a className="hover:animate-pulse underline" href="tel:00962798967357">
      +962798967357
    </a>
    <a
      className="hover:animate-pulse underline"
      href="https://www.linkedin.com/in/halaabushalbak/"
    >
      LinkedIn: halaabushalbak
    </a>
    <a
      className="hover:animate-pulse underline"
      href="mailto:halaj.abushalbak@gmail.com"
    >
      Email: halaj.abushalbak@gmail.com
    </a>
  </div>

  <div className="flex flex-col gap-2 text-sm text-start">
    <strong>Useful Links</strong>
    <a className="hover:animate-pulse underline" href="#about">About Us</a>
    <a className="hover:animate-pulse underline" href="#categories">Categories</a>
    <a className="hover:animate-pulse underline" href="/dashboard">All Items</a>

  </div>

  <div className="flex flex-col gap-2 text-sm text-start">
    <strong>Built Using</strong>
    <p>React</p>
    <p>Vite</p>
  </div>
</footer>

    </>
  );
};

export default Footer;

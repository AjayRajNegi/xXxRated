import "./ContactMain.css";
const ContactMain = () => {
  return (
    <>
      <div className="contact">
        <div className="mask-header flex justify-between">
          <div className="mask-header-first flex items-center gap-2 leading-4">
            <img src="/icons8-web.gif" alt="" />
            <p className="">
              BASED IN DELHI (INDIA) AND <br /> WORKING NATIONWIDE
            </p>
          </div>
          <div className="mask-header-second hidden text-right leading-4 md:flex">
            <p>
              ©2024 XXXRATED <br />
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
        <div className="main-contact flex flex-col items-center justify-center text-center">
          <div className="main-contact-content">
            <span className="text-sm md:text-base">FOR GENERAL ENQUIRY</span>
            <br />
            <p className="text-3xl md:text-7xl">xxxtrends@gmail.com</p>
          </div>
          <div className="main-contact-content">
            <span className="text-sm md:text-base">
              FOR WHOLESALE AND ORDERS
            </span>
            <br />
            <p className="text-3xl md:text-7xl">8505972324</p>
          </div>
          <div className="main-contact-content pb-9">
            <span className="text-sm md:text-base">PHONE</span>
            <br />
            <p className="text-3xl md:text-7xl">8860437438</p>
          </div>
        </div>
        <div className="contact-headquater grid grid-cols-1 md:grid-cols-2">
          <img src="Contact.webp" alt="" />
          <div className="contact-headquater-details flex flex-col justify-between gap-3">
            <p className="pt-5 text-xl">HEADQUATER</p>
            <p className="text-2xl md:text-5xl">
              SHOP NO 142 F-6, F-7, F-8 FIRST FLOOR NEW QUTUB ROAD MITHAI SADAR
              BAZAR DELHI 110006
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMain;

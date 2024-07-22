import "./ContactMain.css";
const ContactMain = () => {
  return (
    <>
      <div className="h-screen bg-white">
        <div className="contact">
          <div className="mask-header flex justify-between">
            <div className="mask-header-first flex items-center gap-2 leading-4">
              <img src="" alt="" />
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
              <p className="text-3xl md:text-7xl">INFO@VIBOR.IT</p>
            </div>
            <div className="main-contact-content">
              <span className="text-sm md:text-base">
                FOR WHOLESALE AND ORDERS
              </span>
              <br />
              <p className="text-3xl md:text-7xl">SALES@VIBOR.IT</p>
            </div>
            <div className="main-contact-content pb-9">
              <span className="text-sm md:text-base">PHONE</span>
              <br />
              <p className="text-3xl md:text-7xl">(+39) 02 66.204.556</p>
            </div>
          </div>
          <div className="contact-headquater grid grid-cols-1 md:grid-cols-2">
            <img src="" alt="" />
            <div className="contact-headquater-details flex flex-col justify-between gap-3">
              <p className="pt-5 text-xl">HEADQUATER</p>
              <p className="text-5xl md:text-7xl">
                VIA DON B.GRAZIOLI 57 20161 MILANO (ITALY)
              </p>
            </div>
          </div>
          <hr className="mask-hr" />
        </div>
      </div>
    </>
  );
};

export default ContactMain;

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-700 text-center text-surface/75  dark:text-white lg:text-left ">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-gray-400 lg:justify-between">
          <div className="me-12 hidden lg:block font-semibold">
            <span>Get connected with us on social networks :</span>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61550722756940&mibextid=ZbWKwL"
              className="me-6 [&>svg]:h-4 [&>svg]:w-4 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FAdmeduWelfare"
              className="me-6 [&>svg]:h-4 [&>svg]:w-4 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/admedu.society?igshid=MzRlODBiNWFlZA%3D%3D"
              className="me-6 [&>svg]:h-4 [&>svg]:w-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/adm-education-and-welfare-society-45a06b27b/"
              className="me-6 [&>svg]:h-4 [&>svg]:w-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </a>
          </div>
        </div>

        {/*About us   section*/}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
                <span className="me-3 [&>svg]:h-4 [&>svg]:w-4"></span>
                About Us
              </h6>
              <p className="font-semibold">
                "Belief is the cornerstone of every endeavor, and NGOs stand as
                living testaments to the power of belief in action. They are
                born from the conviction that a better world is not just a dream
                but an achievable reality"
              </p>
            </div>

            {/* Opening Hours section*/}
            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
                Opening hours
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                Monday-Thursday [9:00AM-6:00PM]
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                Friday [9:00AM-5:00PM]
              </p>
            </div>

            {/* Our brances section */}
            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
                Our Branches
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                <a
                  href="https://www.google.com/maps/place/Sector+14,+Gurugram,+Haryana+122022/@28.47258,77.044489,12z/data=!4m6!3m5!1s0x390d19b2668b71e3:0xe4ba6a0849b01c0a!8m2!3d28.4710811!4d77.0454144!16s%2Fg%2F1tgwl1z5?hl=en&entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gurugram
                </a>
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                <a
                  href="https://www.google.com/maps?ll=28.885287,76.614584&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=5440698255477377477"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rohtak
                </a>
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                <a
                  href="https://www.google.com/maps?ll=28.711293,77.11997&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=8940567371804577553"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rohini
                </a>
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                <a
                  href="https://maps.app.goo.gl/ABUFGtSuMeHvyhX78"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bahadurgarh
                </a>
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                <a
                  href="https://maps.app.goo.gl/5Rk7mTYw2tt1g44i7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Farukh Nagar
                </a>
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                <a
                  href="https://maps.app.goo.gl/QedXrAyPx75LZAFn9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jhajjar
                </a>
              </p>
            </div>

            {/* contact us */}
            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
                <a href="https://www.google.com/maps?ll=28.885287,76.614584&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=5440698255477377477">
                  Rohtak [Head Office]
                </a>
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                <button
                  onClick={() => (window.location = "info@admedusociety.org")}
                >
                  info@admedusociety.org
                </button>
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start font-semibold">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                +91 9671457366
              </p>
              <p className="flex items-center justify-center md:justify-start font-semibold">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                +91 9958586721
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/5 p-6 text-center font-bold">
          <span>© 2024 Copyright : All Rights Reserved : </span>
          <a href="#/">Anita Devi Memorial Education and Welfare Society</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

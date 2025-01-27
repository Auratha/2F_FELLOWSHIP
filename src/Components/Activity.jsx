import React from "react";

function Activity() {
  return (
    <section id="activity">
      {/* Title */}
      <div className="w-fit ml-5 text-xl font-medium my-6 mb-3 md:text-3xl lg:text-2xl">
        <h2>Activities &#8212;</h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 pb-0 text-xl">
        {/* Column 1 */}
        <div className="space-y-6">
          <div>
            <img
              src="/activity_gallery/activity1.jpg"
              alt="Activity 1"
              className="w-full mb-6"
            />
            <span>15.01.25</span>
            <p className="text-gray-700 mt-2 mb-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus sapien lacus, in fringilla tortor scelerisque et. Duis
              laoreet felis non sem imperdiet malesuada non vitae metus. Sed
              nulla nulla, hendrerit a efficitur vel, porta auctor nibh. Nam non
              vehicula arcu. In facilisis semper est, sed facilisis sem. Aliquam
              lacinia hendrerit posuere. <br />
              <br /> Fusce tincidunt eget sem id sodales. Integer in cursus
              diam, ac sollicitudin turpis. Suspendisse vitae sem est. Nullam ut
              convallis diam, vitae consectetur metus. Vivamus quis dolor sed
              massa ornare eleifend. Nunc condimentum nulla at sapien sodales
              commodo. Quisque a efficitur tortor, ut posuere orci. Etiam libero
              eros, vulputate a urna in, aliquet suscipit dolor. Donec eu
              tincidunt urna.
            </p>
          </div>
          <div>
            <img
              src="/activity_gallery/ag_4.jpeg"
              alt="Activity 2"
              className="w-full mb-6"
            />
            <span>15.01.25</span>
            <p className="text-gray-700 mt-2 mb-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus sapien lacus, in fringilla tortor scelerisque et. Duis
              laoreet felis non sem imperdiet malesuada non vitae metus. Sed
              nulla nulla, hendrerit a efficitur vel, <br />
              <br /> porta auctor nibh. Nam non vehicula arcu. In facilisis
              semper est, sed facilisis sem. Aliquam lacinia hendrerit posuere.
              Fusce tincidunt eget sem id sodales. Integer in cursus diam, ac
              sollicitudin turpis.
            </p>
          </div>
          <div className="sm:block lg:hidden hidden">
            <img
              src="/activity_gallery/ag_3.jpeg"
              alt="Activity 5"
              className="w-full mb-6"
            />
            <span>15.01.25</span>
            <p className="text-gray-700 mt-2 mb-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus sapien lacus, in fringilla tortor scelerisque et. Duis
              laoreet felis non sem imperdiet malesuada non vitae metus. Sed
              nulla nulla, hendrerit a efficitur vel, porta auctor nibh. Nam non
              vehicula arcu. In facilisis semper est, <br />
              <br /> sed facilisis sem. Aliquam lacinia hendrerit posuere. Fusce
              tincidunt eget sem id sodales. Integer in cursus diam, ac
              sollicitudin turpis. Suspendisse vitae sem est. Nullam ut
              convallis diam, vitae consectetur metus. Vivamus quis dolor sed
              massa ornare eleifend. Nunc condimentum nulla at sapien sodales
              commodo. Quisque a efficitur tortor, ut posuere orci. Etiam libero
              eros, vulputate a urna in, aliquet suscipit dolor. Donec eu
              tincidunt urna.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div>
            <img
              src="/activity_gallery/ag_2.jpeg"
              alt="Activity 3"
              className="w-full mb-6"
            />
            <span>15.01.25</span>
            <p className="text-gray-700 mt-2 mb-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus sapien lacus, in fringilla tortor scelerisque et. Duis
              laoreet felis non sem imperdiet malesuada non vitae metus. Sed
              nulla nulla, hendrerit a efficitur vel, porta auctor nibh. Nam non
              vehicula arcu. In facilisis semper est, sed facilisis sem. Aliquam
              lacinia hendrerit posuere. <br />
              <br /> Fusce tincidunt eget sem id sodales. Integer in cursus
              diam, ac sollicitudin turpis. Suspendisse vitae sem est. Nullam ut
              convallis diam, vitae consectetur metus. Vivamus quis dolor sed
              massa ornare eleifend. Nunc condimentum nulla at sapien sodales
              commodo. Quisque a efficitur tortor, ut posuere orci. Etiam libero
              eros, vulputate a urna in, aliquet suscipit dolor. Donec eu
              tincidunt urna.
            </p>
          </div>
          <div>
            <img
              src="/activity_gallery/ag_5.jpeg"
              alt="Activity 4"
              className="w-full mb-6"
            />
            <span>15.01.25</span>
            <p className="text-gray-700 mt-2 mb-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus sapien lacus, in fringilla tortor scelerisque et. Duis
              laoreet felis non sem imperdiet malesuada non vitae metus. Sed
              nulla nulla, hendrerit a efficitur vel, <br />
              <br /> porta auctor nibh. Nam non vehicula arcu. In facilisis
              semper est, sed facilisis sem. Aliquam lacinia hendrerit posuere.
              Fusce tincidunt eget sem id sodales. Integer in cursus diam, ac
              sollicitudin turpis. Suspendisse vitae sem est. Nullam ut
              convallis diam, vitae consectetur metus.
            </p>
          </div>
          <div className="sm:block lg:hidden hidden">
            <img
              src="/activity_gallery/ag_6.jpeg"
              alt="Activity 6"
              className="w-full mb-6"
            />
            <span>15.01.25</span>
            <p className="text-gray-700 mt-2 mb-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus sapien lacus, in fringilla tortor scelerisque et. Duis
              laoreet felis non sem imperdiet malesuada non vitae metus. Sed
              nulla nulla, <br />
              <br /> hendrerit a efficitur vel, porta auctor nibh. Nam non
              vehicula arcu. In facilisis semper est, sed facilisis sem. Aliquam
              lacinia hendrerit posuere. Fusce tincidunt eget sem id sodales.
              Integer in cursus diam, ac sollicitudin turpis. Suspendisse vitae
              sem est. Nullam ut convallis diam, vitae consectetur metus.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-6 lg:block sm:hidden">
          <div>
            <img
              src="/activity_gallery/ag_3.jpeg"
              alt="Activity 5"
              className="w-full mb-6"
            />
            <span>15.01.25</span>
            <p className="text-gray-700 mt-2 mb-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus sapien lacus, in fringilla tortor scelerisque et. Duis
              laoreet felis non sem imperdiet malesuada non vitae metus. Sed
              nulla nulla, hendrerit a efficitur vel, porta auctor nibh. Nam non
              vehicula arcu. In facilisis semper est, <br />
              <br /> sed facilisis sem. Aliquam lacinia hendrerit posuere. Fusce
              tincidunt eget sem id sodales. Integer in cursus diam, ac
              sollicitudin turpis. Suspendisse vitae sem est. Nullam ut
              convallis diam, vitae consectetur metus. Vivamus quis dolor sed
              massa ornare eleifend. Nunc condimentum nulla at sapien sodales
              commodo. Quisque a efficitur tortor, ut posuere orci. Etiam libero
              eros, vulputate a urna in, aliquet suscipit dolor. Donec eu
              tincidunt urna.
            </p>
          </div>
          <div>
            <img
              src="/activity_gallery/ag_6.jpeg"
              alt="Activity 6"
              className="w-full mb-6"
            />
            <span>15.01.25</span>
            <p className="text-gray-700 mt-2 mb-24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tempus sapien lacus, in fringilla tortor scelerisque et. Duis
              laoreet felis non sem imperdiet malesuada non vitae metus. Sed
              nulla nulla, <br />
              <br /> hendrerit a efficitur vel, porta auctor nibh. Nam non
              vehicula arcu. In facilisis semper est, sed facilisis sem. Aliquam
              lacinia hendrerit posuere. Fusce tincidunt eget sem id sodales.
              Integer in cursus diam, ac sollicitudin turpis. Suspendisse vitae
              sem est. Nullam ut convallis diam, vitae consectetur metus.
            </p>
          </div>
        </div>
      </div>

      <h4 className="mb-4 text-4xl text-center">Our Location</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.666123228664!2d99.01509257497044!3d18.81302698233816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da25323ca4b707%3A0xb4df958552bccb5a!2sChiang%20Mai%20CCC%20Center!5e0!3m2!1smy!2sth!4v1737818191784!5m2!1smy!2sth"
        className="w-[90%] mx-auto"
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Activity;

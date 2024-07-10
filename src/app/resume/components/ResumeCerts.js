import React from "react";
import Image from "next/image";

function ResumeCerts() {
  return (
    <section className="certifications">
      <h3 className="section-titles text-center">Certificates</h3>
      <article className="cert-container w-full flex flex-row justify-evenly align-center m-auto">
        <p className="certs">
          Meta Front-End Developer Specialization
          <a
            href="https://coursera.org/verify/professional-cert/T7LBBHYDCDXS"
            className="certs-link"
          >
            <Image
              src="/cert1.png"
              id="cert-img"
              className="cert-img flex justify-center text-center m-auto"
              width={200}
              height={200}
              sizes="(max-width: 250px) 50vw, 20vw"
              alt="cert"
            />
          </a>
        </p>

        <p className="certs">
          DevOps, Cloud, and Agile Foundations
          <a
            href="https://coursera.org/verify/specialization/7UGZST736VC7"
            className="certs-link"
          >
            <Image
              src="/cert 2.png"
              id="cert-img"
              className="cert-img flex justify-center text-center m-auto"
              width={200}
              height={200}
              sizes="(max-width: 250px) 50vw, 20vw"
              alt="cert 2"
            />
          </a>
        </p>

        <p className="certs">
          Principles of UX/UI Design
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/LSLBEAPZM4FN"
            className="certs-link"
          >
            <Image
              src="/cert 3.png"
              id="cert-img"
              className="cert-img flex justify-center text-center m-auto"
              width={200}
              height={200}
              sizes="(max-width: 250px) 50vw, 20vw"
              alt="cert 3"
            />
          </a>
        </p>
        {/*           
          <p className="certs">
            <span
              ><a href="" className="certs-link"><i className="fa-solid fa-link"></i></a
            ></span>
          </p> */}
      </article>
    </section>
  );
}

export default ResumeCerts;

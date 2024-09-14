"use client";
import Image from "next/image";
import phone from "../../../public/phone.svg";
import mail from "../../../public/mail.svg";
import equipment from "../../../public/equipment.svg";

export default function ContactUs() {
  return (
    <main className={`items-center p-2`}>
      <h1 className={`text-4xl mt-10 font-bold text-center`}>
        <span className="text-[#E3B04A]">Contact</span> Us
      </h1>
      <div
        className={`flex items-center flex-col-reverse md:flex-row p-10 md:gap-5 justify-center`}
      >
        <div className={`mt-10`}>
          <p className={``}>
            Ready to experience exceptional cleaning services? <br /> Reach out
            to us for a free quote or to schedule your first cleaning.
          </p>
          <div className={`flex flex-col gap-2 mt-10 font-bold`}>
            <section
              className={`flex gap-2`}
              onClick={() => (location.href = "tel:+61406780941")}
            >
              <Image className={`aspect-square w-5  `} src={phone} alt={``} />
              <p className={``}>+61 406 780 941</p>
            </section>
            <section
              className={`flex gap-3`}
              onClick={() => (location.href = "mailto:info@dondenciong.com.au")}
            >
              <Image className={`aspect-square w-5 `} src={mail} alt={``} />
              <p className={``}>info@cleenrspot.com</p>
            </section>
            <section className={`flex gap-2.5`}>
              <p className={` font-bold`}>ABN</p>
              <p className={``}>26912506894</p>
            </section>
          </div>
        </div>
        <Image className={`w-52 aspect-auto`} src={equipment} alt={``} />
      </div>
    </main>
  );
}

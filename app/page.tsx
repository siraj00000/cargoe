import Image from "next/image";
import React from "react";
import ShipBgSVG from "@/public/HeroShipSVG.svg";
import HeroMenSVG from "@/public/HeroMenSVG.svg";
import LaptopSVG from "@/public/LaptopSVG.svg";
import CargosCard from "@/components/CargosCard";
import SaveTimeSVG from "@/public/SaveTimeSVG.svg";
import FleetManagementSVG from "@/public/FleetManagementSVG.svg";
import StreamLinedFinancingSVG from "@/public/StreamLinedFinancingSVG.svg";
import RealTimeTrackingSVG from "@/public/RealTimeTrackingSVG.svg";
import ComplianceAndClaimsSVG from "@/public/ComplianceAndClaimsSVG.svg";
import AppSnapSVG from "@/public/AppSnapSVG.svg";
import AppActivesSVG from "@/public/AppActivesSVG.svg";
import FileLady from "@/public/FileLady.svg";
import TruckSVG from "@/public/TruckSVG.svg";
import RailSVG from "@/public/RailSVG.svg";
import ShipSVG from "@/public/ShipSVG.svg";
import planeSVG from "@/public/planeSVG.svg";
import SectionBgSVG from "@/public/SectionBgSVG.svg";
import CustomerCareSVG from "@/public/CustomerCare.svg";
import FrankSmartSVG from "@/public/FrankSmart.svg";
import DekerLambertSVG from "@/public/DekerLambertSVG.svg";
import PersonOne from "@/public/PersonOne.svg";
import PersonOneCompany from "@/public/PersonOneCompany.svg";
import PersonTwo from "@/public/PersonTwo.svg";
import PersonTwoCompany from "@/public/PersonTwoCompany.svg";
import PersonThreeCompany from "@/public/PersonThreeCompany.svg";
import PersonThree from "@/public/PersonThree.svg";
import PeterOkhardCompanyLogoSVG from "@/public/PeterOkhardCompanyLogoSVG.svg";
import DanSummers from "@/public/DanSummers.svg";
import SaraFeySVG from "@/public/SaraFeySVG.svg";
import CoronaAppScreenSVG from "@/public/CoronaAppScreenSVG.svg";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import VideoPlayer from "@/components/VideoPlayer";
import Features from "@/components/Features";
import Quotation from "@/components/Quotation";
import {
  AvatorComponentProps,
  FeaturesProps,
  ReachOutOptionProps,
} from "@/types/index.types";
import ReachOutCard from "@/components/ReachOutCard";
import DynamicImageWithComponents from "@/components/DynamicImageWithComponents";

const featuresList: FeaturesProps[] = [
  { Icon: SaveTimeSVG, title: "Save Time" },
  { Icon: FleetManagementSVG, title: "Fleet Management" },
  { Icon: StreamLinedFinancingSVG, title: "Streamlined Financing" },
  { Icon: RealTimeTrackingSVG, title: "Real-time Tracking" },
  { Icon: ComplianceAndClaimsSVG, title: "Compliance & Claims" },
];

const ReactOutOptions: ReachOutOptionProps[] = [
  {
    Icon: TruckSVG,
    title: "Land Freight",
    description:
      "Our technology will ensure that you have the tarmac covered with our seamless solutions.",
  },
  {
    Icon: RailSVG,
    title: "Rail Freight",
    description:
      "Keep on track with all your rail logistical requirements and let the software do it's magic.",
  },
  {
    Icon: ShipSVG,
    title: "Ocean Freight",
    description:
      "Our process is as smooth as water when it comes to handling your sea and ocean freight.",
  },
  {
    Icon: planeSVG,
    title: "Air Freight",
    description:
      "Soaring the skies with your logistical needs. Our application will provide a safe and secure environment.",
  },
];

const AvatarCustomerComponent: AvatorComponentProps[] = [
  {
    blurBg: "blured-bg-1",
    name: "Danny Ecroyd",
    designation: "Shop director",
    companyLogo: PersonThreeCompany,
    profilePic: PersonThree,
  },
  {
    blurBg: "blured-bg-2",
    name: "Victoria Summer",
    designation: "Coordinator of products",
    profilePic: PersonTwo,
    companyLogo: PersonTwoCompany,
  },
  {
    blurBg: "blured-bg-3",
    name: "Frank Smart",
    designation: "Logistics Manager",
    companyLogo: PersonOne,
    profilePic: PersonOneCompany,
    designationTextColor: "text-activeTab",
  },
];

const AvatarMultitudeComponent: AvatorComponentProps[] = [
  {
    blurBg: "blured-bg-1",
    name: "Dan Summers",
    designation: "carrier",
    companyLogo: PersonThreeCompany,
    profilePic: DanSummers,
  },
  {
    blurBg: "blured-bg-2",
    name: "Sara Fey",
    designation: "3PL",
    profilePic: SaraFeySVG,
    companyLogo: PersonTwoCompany,
  },
  {
    blurBg: "blured-bg-3",
    name: "Peter Okhard",
    designation: "Shipper",
    companyLogo: PeterOkhardCompanyLogoSVG,
    profilePic: PersonTwo,
    designationTextColor: "text-activeTab",
  },
];

/**
 * Home page component.
 * Displays the main content of the home page.
 * @returns {JSX.Element} The rendered home page component.
 */
const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-lightGray pb-20">
        <div className="md:h-300 bg-light absolute top-0 inset-0"></div>
        <div className="px-8per h-auto">
          {/* Blue Bg */}
          <div className="relative h-auto">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary bg-opacity-90 rounded-48 z-10" />
            <Image
              src={ShipBgSVG}
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="grid md:grid-cols-2 grid-cols-1 pt-14 text-light z-20 space-x-3 absolute inset-0 h-full w-full">
              {/* Column One */}
              <div className="flex flex-col gap-5 col-span-1 px-12per pr-0">
                <h1 className="text-white font-sharpsans800 text-40">
                  Third-party logistics, 3PL & Freight Forwader
                </h1>
                <p className="text-16 leading-24 font-nunito400">
                  Transform your logistics processes with Cargoe to explore a
                  hidden world of opportunities you won’t find elsewhere.
                </p>

                <div className="flex-between rounded-16 border border-light mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="bg-transparent placeholder:text-light px-8 tex16 font-nunito400"
                  />
                  <button className="bg-accent rounded-xl text-secondary font-nunito700 py-3 px-5">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Column two */}
              <div className="col-span-1 px-10 relative hidden md:block ">
                <Image
                  src={ShipBgSVG}
                  className="w-full h-auto object-contain"
                  alt=""
                />
                <Image
                  src={HeroMenSVG}
                  className="w-auto h-auto object-contain absolute bottom-0 "
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Cargo Cards */}
          <div className="w-full flex items-center justify-center px-8per relative h-auto md:-top-32 z-30 gap-5">
            <CargosCard />
            <CargosCard />
            <CargosCard />
            <CargosCard />
          </div>

          {/* 
            Digital Redesign contain two columns 
          */}
          <div className="grid grid-cols-2 px-8per">
            <div className="pt-20per col-span-1">
              <h4 className="text-40 font-sharpsans800 text-primary">
                Digitally Redesigned <br />{" "}
                <span className="text-secondary">
                  Logistics For Maximum Benefits
                </span>
              </h4>
              <p className="text-16 leading-24 font-nunito400 w-4/5 my-3">
                Transform your logistics processes with Cargoe to explore a
                hidden world of opportunities you won’t find elsewhere.
              </p>
              <button className="text-16 leading py-16 px-24 font-nunito700 bg-accent text-secondary my-10 rounded-16">
                Book a Demo
              </button>
            </div>
            <div className="col-span-1 relative h-full">
              <div className="h-400 w-auto absolute inset-0">
                <Image
                  src={LaptopSVG}
                  className="w-full h-full object-cover scale-125"
                  alt="laptopSVG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Customer Section */}
      <section className="grid grid-cols-2 px-12per py-8per gap-10">
        <DynamicImageWithComponents
          backgroundImage={CustomerCareSVG}
          profileImage={FrankSmartSVG}
          profilerBlurClass="blured"
          iconsPositioning="right-[18%]"
          AvatorComponentProps={AvatarCustomerComponent}
        />

        <div className="col-span-1 flex flex-col justify-center items-start">
          <h4 className="text-40 font-sharpsans800 text-primary">
            {`Meet Your Customers'`} <br />{" "}
            <span className="text-secondary">Ever-Changing</span> Needs
          </h4>
          <p className="text-16 leading-24 font-nunito400 w-4/5 my-3 text-secondary">
            As a company deployed in the transportation industry, running your
            business is all about staying at the top of your game. From managing
            clients to arranging shipping schedules, there are various aspects
            of the job you must cater to. So, whether you’re a{" "}
            <span className="font-nunito700">
              3PL or a freight forwarder, getting rid of manual redundancies{" "}
            </span>{" "}
            is bound to benefit your organization in ways like never before.
            With Cargoe Inc. on your side, scalability is guaranteed in stride!
          </p>
          <button className="text-16 leading py-16 px-24 font-nunito700 bg-accent text-secondary my-10 rounded-16">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Why It’s High Time Your Company Goes Digital */}
      <section className="grid grid-cols-2 w-full">
        <div className="col-span-1 px-12per py-28">
          <h1 className="text-secondary font-sharpsans800 text-40">
            Why It’s High Time Your Company Goes Digital
          </h1>
          <h6 className="text16 my-2">Let us take the load of your hands</h6>{" "}
          <br />
          <p className="text14 font-nunito400">
            <span className="font-nunito700">Logistics management </span> has
            intricate complexities but this doesn’t mean it is impossible. Your
            partners and employees are actively looking for better ways to run
            their businesses which is why going digital is your best option.{" "}
            <br /> <br /> <br />{" "}
            <span className="font-nunito700">
              At Cargoe, we extend your capabilities{" "}
            </span>{" "}
            through our cloud-based enterprise resource planning platform. So,
            not only do you experience a boost in productivity and scaled
            processes, but the overall experience is elevated wholly.
          </p>
        </div>
        <div className="col-span-1 relative py-28">
          <div className="w-3/4 h-full absolute top-0 right-0 bg-primary rounded-l-48" />
          <VideoPlayer />
        </div>
      </section>

      {/* Our Online Marketplace Ensures Your Success */}
      <section className="pt-8per">
        <h1 className="text-secondary font-sharpsans800 text-40 text-center">
          Our Online Marketplace <br />{" "}
          <span className="text-primary">Ensures Your Success</span>
        </h1>
        <p className="text14 md:w-3/5 w-full mx-auto text-center my-2">
          An efficient supply chain is the lifeblood of any business, and you
          certainly cannot afford to go wrong with any of it. Thus, we help you
          overcome the bumps in the road by strengthening your core competency,
          networking power, and collaboration through the power of technology.
        </p>
        <div className="flex items-center justify-center gap-3 my-10">
          {featuresList.map((item, index) => (
            <Features key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Fleet Management */}
      <section className="bg-neutral grid grid-cols-2 px-8per gap-32">
        <div className="col-span-1 relative flex pt-8per">
          <Image
            src={AppActivesSVG}
            alt="AppActivesSVG"
            className="w-auto h-auto object-contain relative left-44 bottom-14 z-10"
          />
          <Image
            src={AppSnapSVG}
            alt="AppSnapSVG"
            className="w-auto h-auto object-fill relative left-32 bottom-10 z-0 rounded-48"
          />
          <Image
            src={FileLady}
            alt="FileLady"
            className="w-auto h-auto object-contain relative z-10"
          />
        </div>

        <div className="col-span-1 flex flex-col items-start justify-center gap-5">
          <h1 className="text-secondary font-sharpsans800 text-32 text-center">
            Fleet Management
          </h1>
          <p className="text-secondary font-nunito400 text14 w-4/5">
            Never run the risk of compliance issues and manage your business
            according to established standards all in one place. With our ERP
            system, managing TSA Cargo as per IACSSP requirements and complying
            with Customs Border Protection is hassle-free. This is topped off by
            seamless Department of Transportation Compliance including HOS Logs,
            Maintenance Inspections, and more along with managing OS&D reporting
            due to cargo claims.
          </p>
          <p className="flex items-center gap-2 text-secondary font-nunito700 text16 text-center">
            View more about our services{" "}
            <ArrowRightIcon className="h-4 w-4 text-secondary" />{" "}
          </p>
        </div>
      </section>

      {/* Powering Your Business With Data Analytics */}
      <section className="bg-lightGray py-12per relative">
        <div className="grid grid-cols-2 px-12per">
          <div className="col-span-1 px-8per">
            <h1 className="text-secondary font-sharpsans800 text-32">
              Powering Your Business With Data Analytics
            </h1>
            <p className="flex items-start gap-3 my-2 text14 font-nunito400">
              <CheckIcon className="w-auto h-auto max-w-[20px] text-primary" />{" "}
              <span>
                <strong className="font-nunito700">
                  {" "}
                  Streamlined logistics management{" "}
                </strong>
                in the modern era is only successful when you leverage the right
                insights. Our SaaS software is enriched with built-in data
                analytics that shows you relevant information so you can make
                better decisions.
              </span>
            </p>
            <p className="flex items-start gap-3 my-2 text14 font-nunito400">
              <CheckIcon className="w-auto h-auto max-w-[20px] text-primary" />
              <span>
                <strong className="font-nunito700">
                  {" "}
                  We enable you to view shipment trends,{" "}
                </strong>{" "}
                gauge workforce shipment routing productivity & quality, keep a
                check on service violations as well as fuel & EV KPI values.
                This is in addition to an actual and projected route comparison
                that provides a 360 degree of your processes.
              </span>
            </p>
          </div>
          <div className="col-span-1"></div>
        </div>

        <div className="grid grid-cols-2 px-12per">
          <div className="col-span-1"></div>

          <div className="col-span-1 px-8per">
            <h1 className="text-secondary font-sharpsans800 text-32">
              Fully Integrative Mobile App
            </h1>
            <p className="flex items-start gap-3 my-2 text14 font-nunito400">
              <CheckIcon className="w-auto h-auto max-w-[20px] text-primary" />{" "}
              <span>
                <strong className="font-nunito700">
                  {" "}
                  Use your handheld device to manage{" "}
                </strong>
                the business in one go! The Cargoe mobile app is built to
                maximize your convenience through a treasure trove of different
                features.
              </span>
            </p>
            <p className="flex items-start gap-3 my-2 text14 font-nunito400">
              <CheckIcon className="w-auto h-auto max-w-[20px] text-primary" />
              <span>
                <strong className="font-nunito700">
                  {" "}
                  You can make the most of easy navigation,{" "}
                </strong>{" "}
                access pickup & proof of delivery through electronic signatures,
                unload/load Scanning, track your shipments through a live GPS,
                recover assets through scanning, and view scheduled routes.
              </span>
            </p>

            <p className="flex items-start gap-3 my-2 text14 font-nunito400">
              <CheckIcon className="w-auto h-auto max-w-[20px] text-primary" />
              <span>
                <strong className="font-nunito700">Additionally,</strong> you
                can view & add HOS Logs in accordance with FMCSA regulations.
              </span>
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-48 w-full"></div>

        <div className="px-12per absolute -bottom-52">
          <Quotation qoutation="Helping your business to reach it`s maximum potential" />
        </div>
      </section>

      {/* Want to know more details on how we can help you? Reach out to us today! */}
      <section className="bg-light py-12per">
        {/* Spacer */}
        <div className="h-48 w-full"></div>

        <h1 className="text-secondary font-sharpsans800 text-40 w-3/5 mx-auto text-center">
          Want to know more details on how we can help you?{" "}
          <span className="text-primary"> Reach out to us today! </span>
        </h1>

        <div className="flex items-center justify-center gap-3 my-10">
          {ReactOutOptions.map((item, index) => (
            <ReachOutCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* We offer a multitude of options to suit your business needs */}
      <section className="grid grid-cols-2 gap-5 px-8per py-8per border-t border-activeTab">
        <div className="col-span-1 flex flex-col justify-center gap-5 items-start pl-8per pr-12per">
          <h4 className="text-40 font-sharpsans800 text-secondary">
            We offer a multitude of options to suit your business needs
          </h4>
          <p className="text-16 leading-24 font-nunito700 w-4/5 my-3 text-secondary">
            In the 21st century digital era, we provide the digital means to
            handle your every logistics needs.
          </p>
          <button className="text-16 leading py-16 px-24 font-nunito700 bg-accent text-secondary rounded-16">
            Book a Demo
          </button>
        </div>
        <DynamicImageWithComponents
          backgroundImage={CoronaAppScreenSVG}
          profileImage={DekerLambertSVG}
          profilerBlurClass="deker-lambert-blured"
          iconsPositioning="right-[32%]"
          AvatorComponentProps={AvatarMultitudeComponent}
        />
      </section>

      {/* We provide the best and fastest logistics solutions available */}
      <section className="relative p-12per">
        <Image
          src={SectionBgSVG}
          className="w-full h-full absolute inset-0 z-0 object-cover"
          alt=""
        />
        <h1 className="text-40 font-sharpsans800 text-light w-3/4 mx-auto text-center relative mb-5 z-10">
          We provide the best and fastest logistics solutions available
        </h1>
        <div className="flex items-center justify-between gap-5 bg-light z-10 relative py-5 px-8 rounded-24">
          <h5 className="text-secondary text-16 font-nunito700">
            What are you waiting for?
          </h5>
          <div className="flex items-center justify-between p-2 border rounded-16 border-activeTab">
            <input
              type="text"
              className="rounded-16 px-2 placeholder:text-secondary text-16 font-nunito400"
              placeholder="Your Name"
            />
            <ArrowRightIcon className="w-5 h-5 text-secondary" />
          </div>
          <div className="flex items-center justify-between p-2 border rounded-16 border-activeTab">
            <input
              type="email"
              className="rounded-16 px-2 placeholder:text-secondary text-16 font-nunito400"
              placeholder="E-mail"
            />
            <ArrowRightIcon className="w-5 h-5 text-secondary" />
          </div>
          <button className="text-16 leading py-3 px-24 font-nunito700 bg-accent text-secondary rounded-16">
            Contact With Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

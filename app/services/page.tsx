import Image from "next/image";
import React from "react";
import {
  ArrowLongRightIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import AnalyticsSVG from "@/public/AnalyticsSVG.svg";
import TopFreightSVG from "@/public/TopFreightSVG.svg";
import GraphUpSVG from "@/public/GraphUpSVG.svg";
import ShieldCheckSVG from "@/public/ShieldCheckSVG.svg";
import FireSVG from "@/public/FireSVG.svg";
import RocketSVG from "@/public/RocketSVG.svg";
import PlaneBgSVG from "@/public/PlaneBgSVG.svg";
import SaveTimeSVG from "@/public/SaveTimeSVG.svg";
import FleetManagementSVG from "@/public/FleetManagementSVG.svg";
import RealTimeTrackingSVG from "@/public/RealTimeTrackingSVG.svg";
import ComplianceAndClaimsSVG from "@/public/ComplianceAndClaimsSVG.svg";
import ShipmentBookingSVG from "@/public/ShipmentBookingSVG.svg";
import EngineerSVG from "@/public/EngineerSVG.svg";
import AppActivesSVG from "@/public/AppActivesSVG.svg";
import Quotation from "@/components/Quotation";
import { FeaturesProps, StatisticscomponentProps } from "@/types/index.types";
import StatisticsComponent from "@/components/StatisticsComponent";
import Features from "@/components/Features";

const statistics: StatisticscomponentProps[] = [
  {
    Icon: GraphUpSVG,
    count: 7255,
    category: "Shipments Delivered",
  },
  {
    Icon: ShieldCheckSVG,
    count: 15348,
    category: "Miles Per Month",
  },
  {
    Icon: FireSVG,
    count: 8700,
    category: "Tons Of Goods",
  },
  {
    Icon: RocketSVG,
    count: 1343,
    category: "Satisfied Clients",
  },
];

const featuresList: FeaturesProps[] = [
  { Icon: SaveTimeSVG, title: "Scalability" },
  { Icon: FleetManagementSVG, title: "Lower Cost Management" },
  { Icon: RealTimeTrackingSVG, title: "Data Resilience" },
  { Icon: ComplianceAndClaimsSVG, title: "Greater Efficiency" },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Third-Party Logistics Or 3PL */}
      <section className="grid lg:grid-cols-1 grid-cols-1 py-5per bg-lightGray">
        <div className="flex flex-col text-start justify-center col-span-1 px-12per">
          <h6 className="text-activeTab text16 font-sharpsans700">
            Cargo Ink. Customer Services
          </h6>
          <h1 className="text-secondary  lg:text-56 md:text-40 text-24 font-sharpsans800">
            Third-Party Logistics Or 3PL
          </h1>
          <div className="flex items-center w-full gap-5 mt-4">
            <button className=" text-16 leading py-16 px-24 max-w-150 w-full my-5 font-nunito700 bg-accent text-secondary rounded-16">
              Book a Demo
            </button>
            <button className="flex items-center py-16 px-24 w-full gap-3 text16 font-nunito700 text-secondary">
              Contact Us <ArrowRightIcon className="text-primary w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="col-span-1">
          <Image
            src={AnalyticsSVG}
            className="w-auto h-auto object-contain lg:mx-0 mx-auto"
            alt="AnalyticsSVG"
          />
        </div>

        <div className="lg:col-span-2 col-span-1 grid lg:grid-cols-2 grid-cols-1 gap-20 py-10 lg:px-0 px-8per">
          <p className="grid grid-cols-1 lg:w-3/5 lg:ml-auto text14 font-nunito400 text-secondary">
            Take your 3PL business to new heights by providing the most
            resilient logistics solutions to different companies in all types of
            industries. Customers today aren’t ready to settle for subpar
            logistics businesses that is why you need to make sure that yours is
            the best.
          </p>
          <p className="grid grid-cols-1 lg:w-4/5 text14 font-nunito400 text-activeTab">
            With Cargoe Inc., you can boost employee productivity, reduce
            redundancies and maximize the benefits through inventory and
            warehouse management, shipments, and IT. Moreover, you can also
            expand your network of logistics service providers, be it locally or
            internationally, as well as remain incompliance with Department of
            Homeland Security & Department of Transportation requirements,
            United States-Mexico-Canada Agreement, and International Commercial
            Terms requirements.
          </p>
        </div>
      </section>

      {/* Top freight forwarders today are seamlessly integrated with technology. */}
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-10 px-12per py-8per">
        <div className="col-span-1">
          <Image
            src={TopFreightSVG}
            className="w-auto h-auto object-contain"
            alt="TopFreightSVG"
          />
        </div>
        <div className="col-span-1 flex flex-col items-start pt-10">
          <h1 className="text-32 font-sharpsans800 text-secondary">
            <span className="text-primary">Top freight forwarders today</span>{" "}
            are seamlessly integrated with technology.
          </h1>
          <p className="text14 font-nunito400 text-secondary my-5">
            With our unparalleled cloud-based software solutions assisting your
            company, it is incredibly easy to hone your competencies and prove
            why you’re the best company for hire. You can easily manage delivery
            and pick from various points. Moreover, we have also enabled shipper
            and consignee management on the platform that limits the overall
            hassle. Our freight forwarding users are able to connect with an
            ever-increasing list of network partners with Cargoe Inc. solutions!
          </p>
          <button className=" text-16 leading py-16 px-24 max-w-150 w-full my-5 font-nunito700 bg-accent text-secondary rounded-16">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Qoutation */}
      <section className="p-12per">
        <Quotation qoutation="Helping your business to reach it`s maximum potential" />
      </section>

      {/* Statistics */}
      <section className="p-12per pt-0 flex flex-wrap items-start justify-between gap-5">
        {statistics.map((stats, index) => (
          <StatisticsComponent key={index} {...stats} />
        ))}
      </section>

      {/*  */}
      <section className="pt-8per border-t border-activeTab lg:px-0 px-8per">
        <h1 className="text-secondary font-sharpsans800 lg:text-40 text-32 text-center">
          Modern Freight Forwarders <br />{" "}
          <span className="text-primary">have to face various challenges</span>
        </h1>
        <p className="text14 md:w-3/5 w-full mx-auto text-center my-2">
          To reap real success, you must practice resilience within every aspect
          of your operations. Be it distribution solutions for your top B2B
          client or fulfillment services, 3PLs have a lot to handle. At Cargoe,
          you benefit from an integrated network of partners that can help you
          streamline your client’s supply chain.
        </p>
        <div className="flex items-center justify-center flex-wrap gap-3 my-10">
          {featuresList.map((item, index) => (
            <Features key={index} {...item} />
          ))}
        </div>
      </section>

      {/*  */}
      <section className="bg-lightRed grid lg:grid-cols-2 grid-cols-1 gap-10 px-12per pt-5per lg:pb-0 pb-5per">
        <div className="col-span-1 relative">
          <Image
            src={AppActivesSVG}
            alt="AppActivesSVG"
            className="w-auto h-auto object-contain absolute -left-10 top-14 z-10"
          />
          <Image
            src={ShipmentBookingSVG}
            className="w-auto h-auto object-contain"
            alt="ShipmentBookingSVG"
          />
          <Image
            src={EngineerSVG}
            className="w-auto h-auto object-contain absolute bottom-0 right-8"
            alt="EngineerSVG"
          />
        </div>
        <div className="col-span-1 pt-5per">
          <h1 className="text-32 text-secondary font-sharpsans700">
            Lower Cost Management
          </h1>
          <p className="text14 text-secondary font-nunito400">
            Rising costs are often due to an ineffective resource management
            strategy or inefficient time management. When you leverage our
            platform, however, both time and effort expended by your employees
            will reduce. Not just that but our users also report lower costs
            after joining the platform!
          </p>
          <p className="text14 text-secondary font-nunito700 flex items-center gap-2 mt-8per">
            View more about our services{" "}
            <ArrowLongRightIcon className="w-5 h-5 text-secondary" />
          </p>
        </div>
      </section>

      {/*  */}
      <section className="px-8per py-12per">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="bg-lightGray rounded-40 border-4 border-light w-full shadow-3xl  text-right p-5per">
            <button className="text-12 font-nunito700 text-activeTab p-2 rounded-md bg-light">
              Cargoe Inc.
            </button>
            <h1 className="lg:text-40 text-32 text-secondary font-sharpsans800 text-left mb-2">
              Shippers
            </h1>
            <p className="text-16 text-secondary font-nunito400 text-left">
              Cargoe is able to serve a wide range of shippers through its
              end-to-end solutions that allow you to reap maximum benefits of
              digitally diverse service. We know that your goal is to get the
              right product to the right place without any delays. <br /> <br />{" "}
              Rest assured, when you have us on your side, you’ll be able to
              network with top-of-the-line service providers to ensure
              reliability within each aspect of the collaboration. Our customer
              reviews feature will allow the user to choose the most suitable
              provider and boost their efforts with uninterrupted communication,
              status updates, and seamless LTL, FTL, LCL, and FCL
              transportation. As a shipper, you’ll also be able to generate,
              store, and transfer documents including Bill of Ladings, Packing
              Slips, Commercial Invoices, Certificate of Origin, and Letter of
              Credit seamlessly.
            </p>
          </div>

          <div className="bg-lightGray rounded-40 border-4 border-light w-full shadow-3xl  text-right p-5per">
            <button className="text-12 font-nunito700 text-activeTab p-2 rounded-md bg-light">
              Cargoe Inc.
            </button>
            <h1 className="lg:text-40 text-32 text-secondary font-sharpsans800 text-left mb-2">
              Carriers
            </h1>
            <p className="text-16 text-secondary font-nunito400 text-left">
              Not sure which 3PL or Freight Forwarder you should work with? Use
              our ERP system to add the best companies to your network. You
              strive to provide a service backed by timely information about
              shipment and serve a client base. <br /> <br /> Our ERP system
              guarantees that you’ll be able to beat benchmarks without any
              setbacks.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 grid-cols-1 mt-8per gap-10">
          <div className="col-span-2 border-r-2 border-[#F7F7F7]">
            <h1 className="lg:text-40 text-32 text-secondary font-sharpsans800">
              Cartage Agents & Couriers
            </h1>
            <p className="text-14 text-secondary font-nunito400 lg:w-4/5">
              Tired of redundant activities slowing down your supply chain? With
              lean logistics as its core fundamental, Cargoe minimizes wasteful
              measures and activities so you can speed up your logistics
              processes the right way. This is in addition to six sigma
              quality-control features that limit errors and mistakes related to
              overall operations. Needless to say, our ERP software:
            </p>
          </div>
          <div className="col-span-3 grid lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-5">
            <div className="flex items-start gap-2 col-span-1">
              <CheckIcon className="w-16 h-16 text-primary" />
              <p className="text-14 text-activeTab font-nunito700">
                <span className="text-secondary font-nunito700">
                  {" "}
                  Makes things easy for Cartage Agents
                </span>{" "}
                and Couriers by connecting them with the best Shippers, 3PLs &
                Freight Forwarders.
              </p>
            </div>

            <div className="flex items-start gap-2 col-span-1">
              <CheckIcon className="w-16 h-16 text-primary" />
              <p className="text-14 text-activeTab font-nunito700">
                <span className="text-secondary font-nunito700">
                  {" "}
                  Ensures end-to-end management
                </span>{" "}
                f TSA cargo according to IACSSP guidelines as an Authorized
                Representative.
              </p>
            </div>

            <div className="flex items-start gap-2 col-span-1">
              <CheckIcon className="w-24 h-24 text-primary" />
              <p className="text-14 text-activeTab font-nunito700">
                <span className="text-secondary font-nunito700">
                  {" "}
                  Converts First & Last Mile shipment requests into pickup and
                  delivery work
                </span>{" "}
                orders along with your brand logo and name, without the need for
                manually reentering shipment details from your customers every
                time.
              </p>
            </div>

           
            <div className="flex items-start gap-2 col-span-1">
              <CheckIcon className="w-16 h-16 text-primary" />
              <p className="text-14 text-activeTab font-nunito700">
                <span className="text-secondary font-nunito700">
                  {" "}
                  Enables easy driver and fleet management features
                  complementary to viewing data
                </span>{" "}
                analytics to help manage and improve their operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="relative grid lg:grid-cols-2 grid-cols-1 px-12per py-8per">
        <Image
          src={PlaneBgSVG}
          className="absolute inset-0 z-0 w-full h-full object-cover object-top"
          alt="PlaneBgSVG"
        />
        <div className="col-span-1 md:h-0 h-300"></div>
        <div className="col-span-1 flex flex-col items-start justify-center z-10">
          <h1 className="lg:text-40 text-32 font-sharpsans800 text-light">
            Indirect Air Carriers & Authorized Representatives
          </h1>
          <p className="text14 font-nunito400 text-light my-5">
            Our cloud-based software is best suited to IACs operating inside the
            United States without an official FAA certificate. Our ERP system
            supports your business model so you can manage Air Cargo
            transportation. <br /> <br /> Rest assured, you won’t have to worry
            about TSA requirements as we have designed various features and
            functionalities to help you carry out a full-fledged security
            program according to specifications with our team of Customs Brokers
            & TSA Compliance specialists. Also, IAC’s and authorized
            representatives will be able to share compliance updates without
            tending to constant emails and phone calls. Whether it’s
            certification approval or overall compliance, Cargoe has just what
            you need in place to guarantee success.
          </p>
          <button className="text-16 leading py-16 px-24 max-w-200 w-full my-5 font-nunito700 bg-accent text-secondary rounded-16">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

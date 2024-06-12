import React from "react";
import ProjectsItem from "./ProjectsItem";
import AdviceGenerator from "../assets/Images/AdviceGenerator.png";
import AgeCalculator from "../assets/Images/Age-calculator.png";
import CardHolder from "../assets/Images/Cardholder.png";
import CountriesApi from "../assets/Images/Countriesapi.png";
import CountryReal from "../assets/Images/CountryReal.png";
import Ecommerceapp from "../assets/Images/Eccomerceapp.png";
import myportfolio from "../assets/Images/myportfolioimages.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] underline">
        Projetcs
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore
        temporibus obcaecati ipsam magni perspiciatis distinctio nesciunt. Quas
        maiores reiciendis architecto officiis, eos facere vel consequatur
        repellat ab error? Mollitia!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem img={AdviceGenerator} title='Advice Generator' />
        <ProjectsItem  img={AgeCalculator} title="Age Calculator"/>
        <ProjectsItem  img={CardHolder} title="Card Holder"/>
        <ProjectsItem img={CountriesApi} title="Country Api" />
        <ProjectsItem img={CountryReal} title="Country Real Api" />
        <ProjectsItem img={Ecommerceapp} title="Ecommerce App" />
        <ProjectsItem img={myportfolio} title="My portfolio" />

      </div>
    </div>
  );
};

export default Projects;

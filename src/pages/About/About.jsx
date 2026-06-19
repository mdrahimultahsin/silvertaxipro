
import Container from "../../components/shared/Container";

import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import Commitment from "./Commitment";
import HomeAreaCovered from "../Home/HomeAreaCovered";
import PagesHero from "../../components/shared/PagesHero";
import useSEO from "../../hooks/useSEO";

const About = () => {
  return (
    <>
 {useSEO({
        title: "About Silver Taxi Pro – Trusted Taxi Service in Sydney & Campbelltown",
        description:
          "Learn more about Silver Taxi Pro, a trusted and professional taxi service operating across Sydney, Campbelltown, and surrounding areas. We are committed to providing safe, comfortable, and reliable transportation for airport transfers, corporate travel, and local rides with experienced drivers and affordable pricing.",
        keywords: "about silver taxi pro, silver taxi pro company, taxi service sydney about, campbelltown taxi company, trusted taxi sydney, professional taxi service australia, reliable taxi campbelltown, airport transfer service sydney, local taxi service sydney nsw, luxury taxi service about, cab company sydney, transport service campbelltown, taxi business sydney, safe taxi service australia, private taxi sydney",
        canonical: "https://silvertaxipro.com.au/about",
      })}
      <div className="pb-15">
        {/* hero section */}
        <PagesHero title={"About Us"} description="      Silver Taxi Pro is a Sydney based maxi cab service
                  established in 2010. We provide affordable, reliable, and safe
                  transport for families, groups, and business travelers. Our
                  fleet includes sedans, SUVs, maxi vans, luxury cars. We operate 24/7 across all Sydney
                  suburbs and offer airport transfers, cruise transfers,
                  corporate trips, and baby seat taxis."/>
     

        <div>
          <Container>
            <WhoWeAre />
          </Container>

          <WhatWeDo />
          <Container>
            {/* <AboutChooseUs/> */}

          </Container>
            <Commitment />
        </div>
      <HomeAreaCovered/>
      </div>
    </>
  );
};

export default About;

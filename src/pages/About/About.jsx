
import Container from "../../components/shared/Container";

import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import Commitment from "./Commitment";
import HomeAreaCovered from "../Home/HomeAreaCovered";
import PagesHero from "../../components/shared/PagesHero";

const About = () => {
  return (
    <>

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

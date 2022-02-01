import React from "react";
import Megan from "../images/Megan.jpg";

const AboutMe = () => {
  return (
    <div>
      <h1>Megan D.</h1>
      <div class="flex flex-row">
        <h2>
          Hiya! My name is Megan and it's great to meet you! I am a web
          developer based in southern Florida. In my free time I love playing
          videos games, particularly strategy ones, and reading books of all
          types. I’ve been accused of being a horrible cook but an excellent
          baker, which confuses everyone, most of all me. I have a West Highland
          Terrier named Buffy who adores me, and a cat named Mousse who mostly
          tolerates my existence as a necessary part of dinner time.
        </h2>
        <img src={Megan} alt="Megan" />
      </div>
    </div>
  );
};

export default AboutMe;

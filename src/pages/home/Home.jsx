import React from "react";
import {
  FaGithub,
  FaSteam,
  FaTwitch,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import SocialLink from "./components/SocialLink";

import { Grid, Container } from "@nextui-org/react";
const Home = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        minHeight: "600px",
      }}
      className="animate-fadeIn"
    >
      <HomeData />
    </Container>
  );
};

const HomeData = () => {
  const socials = [
    {
      name: "Github",
      link: "https://github.com/Averyyyyyyyy",
      icon: <FaGithub />,
      color: "#333",
    },
    {
      name: "Steam",
      link: "https://steamcommunity.com/id/cummyavery/",
      icon: <FaSteam />,
      color: "#171a21",
    },
    {
      name: "Twitch",
      link: "https://www.twitch.tv/cattgirlava",
      icon: <FaTwitch />,
      color: "#6441a5",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/cattgirlava",
      icon: <FaTwitter />,
      color: "#1da1f2",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/cattgirlava/",
      icon: <FaInstagram />,
      color: "#e1306c",
    },
    {
      name: "Discord",
      icon: <FaDiscord />,
      color: "#7289da",
      value: "avery#9957",
    },
  ];

  const getSocials = () => {
    return socials.map((item, index) => {
      return (
        <SocialLink
          key={index}
          icon={item.icon}
          link={item.link}
          name={item.name}
          color={item.color}
          value={item.value}
        />
      );
    });
  };

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <span className="text-1xl sm:text-2xl text-white">
            Hello, my name is{" "}
          </span>
          <span className="text-4xl sm:text-4xl font-bold text-lgbtq-pink">
            Avery{" "}
          </span>
        </div>
        <span className="text-white py-4 max-w[700px]">
          I{"'"}m 19 years of age. I like to code and plan to go into the field.
          Currently I am focusing on frontend development and design. This
          website is going to be a project that I can practice on.
        </span>
      </div>

      <Grid.Container gap={2} justify="center">
        {getSocials()}
      </Grid.Container>

      {/*<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-evenly items-center">
        {getSocials()}
  </div>*/}
    </div>
  );
};

export default Home;

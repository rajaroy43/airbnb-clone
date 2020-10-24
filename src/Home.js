import Card from "./Card";
import React from "react";
import Banner from "./Banner";
import "./Home.css";
import { Button } from "@material-ui/core";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__Section">
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=480"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__sectionbig">
        <div className="home__sectionbigInfo">
          <div className="home__sectionInfoText">
            <h2>Online Experiences</h2>
            <p>
              Meet people all over the world while trying something new. Join
              live, interactive video sessions led by one-of-a-kind hosts – all
              without leaving home.
            </p>
          </div>
          <Button>Explore all</Button>
        </div>
        <div className="home__section2">
          <div className="home__section2Left">
            <Card
            src="https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg?im_w=720"
            title="Learn to make soup dumplings in Shanghai"
            bg="light__black"
          />
          </div>
          <div className="home__section2Right">
            <div className="home__Section2Upper">
            <Card
              src="https://a0.muscache.com/im/pictures/0735e435-3d1d-4aec-b536-9ee54f299ce6.jpg?im_w=480"
              title="Explore feminism with street art and graffiti"
              bg="light__black"
            />
            <Card
              src="https://a0.muscache.com/im/pictures/1793b6aa-4c3c-4193-a65a-09b440b2ca2c.jpg?im_w=480"
              title="Go backstage with a New York magician"
              bg="light__black"
            />
            </div>
            <div className="home__section2Down">
            <Card
              src="https://a0.muscache.com/im/pictures/925f99bb-c5bc-4d82-9803-518abeef7e2e.jpg?im_w=480"
              title="Craft cocktails and talk gender with a bartender"
              bg="light__black"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

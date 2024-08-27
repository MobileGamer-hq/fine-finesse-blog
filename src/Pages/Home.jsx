import React from "react";
import { sizes } from "../constants";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitch,
  BsTwitter,
  BsTwitterX,
  BsX,
  BsXCircle,
  BsYoutube,
} from "react-icons/bs";
import { Button } from "../Components/Button";

function Home() {
  return (
    <div>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          color: "gold",
        }}
      >
        <div className="title">Fine Finesse</div>
        <div style={{ fontSize: sizes.font.small }}>
          You the brand, let's rebrand you.
        </div>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div className="sub-title-container">
          <div className="sub-title">Recent Posts</div>
          <div>New post by finefinesse</div>
        </div>
        <div
          style={{
            height: "70%",
            backgroundColor: "black",
          }}
        >
          new Post
        </div>
      </section>
      <section>
        <div className="sub-title">Popular Post</div>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
        className="home-about"
      >
        <div
          style={{
            height: 300,
                      width: 200,
            backgroundColor: "black"
          }}
        >
          <image />
        </div>
        <div>
          <div className="sub-title">What We Are About</div>
          <div>{"Long Story...."}</div>
          <Button title={"Read More"} fill={false} />
        </div>
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "100%",
          }}
        >
          <div style={{ fontSize: sizes.font.medium }}>
            Now you know us, let's know you
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "50%",
            width: "100%",
            backgroundColor: "black",
            color: "gold",
          }}
        >
          <div style={{ fontSize: sizes.font.medium, marginBottom: "2rem" }}>
            Contact Us
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: 300,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <a href="">
              <BsInstagram />
            </a>
            <a href="">
              <BsFacebook />
            </a>
            <a href="">
              <BsYoutube />
            </a>
            <a href="">
              <BsTwitterX />
            </a>
            <a href="">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

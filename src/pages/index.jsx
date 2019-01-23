import React, { Component } from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/addons.cjs";
import axios from "axios";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import LoaderButton from "../components/LoaderButton";
import "../components/LoaderButton.css";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

// styles
import "../styles/contact.css";

import avatar from "../images/avatar.jpeg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-40 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

class Index extends Component {
  state = { email: "", name: "", message: "", isLoading: false };
  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    const { name, email, message } = this.state;
    const data = {
      name,
      email,
      message
    };
    this.setState({ isLoading: true, name: "", email: "", message: "" });
    this.sendContact(data);
  }

  sendContact = async data => {
    try {
      await axios
        .post(" https://emailer-portfolio.herokuapp.com/email", data)
        .then(function(response) {
          console.log(response);
        });
    } catch (e) {
      console.log(e);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <>
        <Layout />
        <Parallax pages={5}>
          <Hero offset={0}>
            <BigTitle>
              Hello, <br /> I'm Austin Loveless. Check out my{" "}
              <a
                href="#
          "
              >
                blogs!
              </a>
            </BigTitle>
            <Subtitle>
              I'm building Web/Mobile application backed with Cloud
              infrastructure.
            </Subtitle>
          </Hero>
          <Projects offset={1}>
            <Title>Projects</Title>
            <ProjectsWrapper>
              <ProjectCard
                title="TravelGram"
                link="https://github.com/austinloveless/Travel-Capstone-Client/blob/master/README.md"
                bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
              >
                An Instagram mock displaying images of only travel locations. A
                react-native application with Firebase Authentication.
              </ProjectCard>
              <ProjectCard
                title="YelpCamp"
                link="https://campgrounds-yelp-camp.herokuapp.com/"
                bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              >
                YelpCamp is a yelp like site, but used for campsites of users.
                The project was built off a Node server with EJS.
              </ProjectCard>
              <ProjectCard
                title="Scratch"
                link="https://scratch-that-note.com/"
                bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
              >
                A note taking application for web or mobile devices. Scratch is
                backed completely by AWS resources with a React Frontend.
              </ProjectCard>
              <ProjectCard
                title="Austin Codes"
                link="https://www.behance.net/gallery/38068151/Eagle"
                bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
              >
                A simple Gatsby blog site. Used to host my blogs about new
                coding challenge, projects, or discoveries I've found.
              </ProjectCard>
            </ProjectsWrapper>
          </Projects>
          <About offset={3}>
            <Title>About</Title>
            <AboutHero>
              <Avatar src={avatar} alt="Austin Loveless" />
              <AboutSub>
                Full Stack Developer with a passion for Amazon Web Services. My
                skills stretch from mobile/web development to cloud computing
                and infrastructure. To continue my growth I will be working with
                Rasphberry Pi's and Arduinos.
              </AboutSub>
            </AboutHero>
            <AboutDesc>
              Prior to Software Development I was in the Navy. Now with the
              skills acquired in the Navy I attended a fast paced Engineering
              program where I finished in half the time. Outside of just
              development I volunteer to help teach a web development course and
              attend/speak at meetups around the community.
            </AboutDesc>
          </About>
          <Contact offset={4}>
            <Inner>
              <Title>Get in touch</Title>

              <ContactText>
                <section className="get-in-touch">
                  <form
                    className="contact-form row"
                    onSubmit={this.handleSubmit.bind(this)}
                  >
                    <div className="form-field col x-50">
                      <input
                        id="name"
                        className="input-text js-input"
                        type="text"
                        name="name"
                        onChange={this.onInputChange}
                        required
                      />
                      <label className="label" htmlFor="name">
                        Name
                      </label>
                    </div>
                    <div className="form-field col x-50">
                      <input
                        id="email"
                        className="input-text js-input"
                        type="email"
                        onChange={this.onInputChange}
                        name="email"
                        required
                      />
                      <label className="label" htmlFor="email">
                        E-mail
                      </label>
                    </div>
                    <div className="form-field col x-100">
                      <input
                        id="message"
                        className="input-text js-input"
                        type="text"
                        name="message"
                        onChange={this.onInputChange}
                        required
                      />
                      <label className="label" htmlFor="message">
                        Message
                      </label>
                    </div>
                    <div className="form-field col x-100 align-center">
                      <LoaderButton
                        className="submit-btn LoaderButton spinning glyphicon"
                        block
                        bsSize="large"
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Email!"
                        loadingText="Emailing..."
                      />
                    </div>
                  </form>
                </section>
              </ContactText>
            </Inner>
            <Footer>&copy; 2019 Powered by Gatsby.js & React.js</Footer>
          </Contact>
        </Parallax>
      </>
    );
  }
}

export default Index;

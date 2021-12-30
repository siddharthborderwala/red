import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PaperPlaneTilt, ChatCircleDots, Cursor, Link } from 'phosphor-react';

import StandardLayout from '../layouts/standard';
import { Meta } from '../components/seo';
import ExternalLink from '../components/external-link';
import Text from '../components/text';

const siteTitle = 'Siddharth Borderwala';
const description =
  "Checkout Siddharth Borderwala's profile and get to know more about him.";
const imgSrc = 'https://www.codexsid.com/social.png';
const twitterLink = 'https://twitter.com/sidborderwala';
const resumeLink =
  'https://drive.google.com/file/d/1K0Ohd28vKzYxPkIK8FLhCfxs8HGjlPKb/view?usp=sharing';

const IndexPage = ({ location }) => {
  return (
    <StandardLayout>
      <Meta
        title={siteTitle}
        description={description}
        image={imgSrc}
        path={location.pathname}
      />
      <div
        style={{
          background: 'url(/dot-grid.png)',
          backgroundRepeat: 'repeat',
        }}
      >
        <header className="w-constraint flex justify-between items-center py-8 sm:py-16 flex-col-reverse md:flex-row md:py-24">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Hi, I am Siddharth.
            </h1>
            <h2 className="text-lg sm:text-2xl text-gray-700 mt-6">
              I build beautiful, fast, accessible and amazing websites. I am a
              computer science geek{' '}
              <span role="img" title="Love">
                💖
              </span>
            </h2>
            <a
              href="mailto:siddharthborderwala@gmail.com"
              className="bg-red-400 text-white text-lg py-2 px-4 mt-8 inline-flex items-center"
            >
              Contact Now <PaperPlaneTilt className="ml-4" weight="bold" />
            </a>
          </div>
          <div className="md:ml-16 rounded-full">
            <StaticImage
              alt="Siddharth Borderwala"
              src="../images/siddharth.png"
              className="border-none rounded-full w-56 md:w-96 mb-16 md:mb-auto"
            />
          </div>
        </header>
        <main className="w-constraint mt-16 pb-20 sm:pb-32">
          <section id="about" className="pt-8">
            <h3 className="text-4xl font-semibold mb-12">Get to know me!</h3>
            <Text>
              I am a Developer and Computer Science undergraduate studying at{' '}
              <ExternalLink href="https://snu.edu.in/home">
                Shiv Nadar University
              </ExternalLink>{' '}
              in Delhi, NCR. I design and build beautiful websites and mobile
              apps. I am trying to create and online audience using this
              blog-folio and{' '}
              <ExternalLink href={twitterLink}>twitter</ExternalLink>. I love
              the JavaScript ecosystem and{' '}
              <ExternalLink href="https://rust-lang.org">Rustlang</ExternalLink>
              . Also, I am currently learning{' '}
              <ExternalLink href="https://golang.org">Golang</ExternalLink>.
            </Text>
            <Text>
              I have been reading The 4-Hour Work Week by Timothy Ferris and
              Atomic Habits by James Clear. Besides, I love watching football,
              sitcoms and thrillers.
            </Text>
            <a
              href="mailto:siddharthborderwala@gmail.com?subject=Hi"
              className="bg-red-400 text-white text-lg py-2 px-4 mt-8 inline-flex items-center"
            >
              Chat With Me <ChatCircleDots className="ml-4" weight="bold" />
            </a>
          </section>
          <section id="work" className="mt-32 pt-8">
            <h3 className="text-4xl font-semibold mb-12">My Work</h3>
            <Text>
              I am a Full-Stack JavaScript/TypeScript developer specializing in
              Reactjs, Nodejs, and the JAMStack ecosystem. I have worked on
              projects solo, as well as led teams of upto 6 developers to
              design, build and deploy production-grade web applications.
            </Text>
            <Text>
              I am an open source contributor and have contributed to libraries
              like{' '}
              <ExternalLink href="https://github.com/validatorjs/validator.js">
                validatorjs
              </ExternalLink>
              . I have created and am maintaining reactjs libraries such as{' '}
              <ExternalLink href="https://github.com/siddharthborderwala/teaful-logger">
                teaful-logger
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink href="https://github.com/sassy-labs/datepicker">
                sassy-datepicker
              </ExternalLink>
              . I am looking forward to building many more useful libraries for
              open source developers.
            </Text>
            <Text>
              I also work with local businesses to design, build and maintain
              their website and/or web applications. I also provide services
              like SEO/SMO opimzation, technical advise, and consultation for
              building an online presence for businesses.
            </Text>
            <h4 className="font-semibold text-2xl mt-6">
              Wanna collaborate/hire me?
            </h4>
            <Text>
              I promise I am fun to work with and once I get comfortable with
              you, I'll crack quite a few jokes 😆.
            </Text>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:siddharthborderwala@gmail.com?subject=Hi"
                className="bg-red-400 text-white text-lg py-2 px-4 inline-flex items-center"
              >
                Collaborate <Cursor className="ml-4" weight="bold" />
              </a>
              <ExternalLink
                href={resumeLink}
                className="border border-red-400 text-red-400 text-lg py-2 px-4 inline-flex items-center"
              >
                My Resume <Link className="ml-4" weight="bold" />
              </ExternalLink>
            </div>
          </section>
        </main>
      </div>
    </StandardLayout>
  );
};

export default IndexPage;

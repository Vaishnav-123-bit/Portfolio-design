import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import Image from "next/image";

const projects = () => {
  const FeaturedProject = ({ type, title, github, link, img, summary }) => {
    return (
      <article>
        <Link href={link} target="_blank">
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div>
          <span>{type}</span>
          <Link href={link} target="_blank">
            <h2>{title}</h2>
          </Link>
          <p>{summary}</p>
          <div>
            <Link href={github} target="_blank">
              <GithubIcon />
            </Link>
            <Link href={link} target="_blank">Visit Project</Link>
          </div>
        </div>
      </article>
    );
  };
  return (
    <>
      <Head>
        <title>Vaishnav Mahadik | Projects</title>
        <meta name="description " content="any description" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge" />
          <div className="grid grid-cols-12 gap-14">
            <div className="col-span-12">
                <FeaturedProject
                title={"Crypto Screener Application"}
                summary=" A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                type="Featured Project"
                img={project1}
                github="www.github.com"
                />
            </div>

            <div className="col-span-6">Project 1</div>

            <div className="col-span-6">Project 2</div>

            <div className="col-span-12">Featured Project</div>

            <div className="col-span-6">Project 3</div>

            <div className="col-span-6">Project 4</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

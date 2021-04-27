import Head from "next/head";
import { ContentContainer, Hero } from "../styles/home";
import SubscribeButton from "../components/SubscribeButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <ContentContainer>
        <Hero>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </Hero>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </ContentContainer>
    </>
  );
}

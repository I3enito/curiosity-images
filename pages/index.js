import Head from "next/head";
import { LandingPage } from "../components/LandingPage/landing-page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>curious.images</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPage></LandingPage>
    </div>
  );
}

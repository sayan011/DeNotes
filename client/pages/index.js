import Head from "next/head";
import Image from "next/image";
import Bg from "../components/Bg";
import styles from "../styles/Home.module.css";
import HomeMain from "./testHome";

export default function Home() {
  return (
    <>
      <Head>
        <title>DeNotes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <HomeMain />
      <Bg />
    </>
  );
}

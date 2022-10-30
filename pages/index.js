import Head from "next/head";
import MainPattern from "../patterns/MainPattern";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainPattern></MainPattern>
    </div>
  );
}

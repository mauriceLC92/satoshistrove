import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NetWorth } from "../components/NetWorth";

export default function Home() {
  return (
    <div className="min-height: 100vh; flex flex-col justify-center items-center">
      <Head>
        <title>Satososhi's Trove</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center px-5 py-5 space-y-10 space-y-24">
        <Header />
        <NetWorth />

        <div className=" border-dashed border-2 border-blue-300 w-full h-56">
          hey
        </div>
      </main>
      <Footer />
    </div>
  );
}

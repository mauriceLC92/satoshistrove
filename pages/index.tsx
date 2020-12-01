import { Header } from "../components/Header";
import { NetWorth } from "../components/NetWorth";

export default function Home() {
  return (
    <div className="min-height: 100vh; flex flex-col justify-center items-center">
      <header className="bg-blue-300 border-gray-800 border-b border-solid w-full">
        <nav className="flex items-center h-10 px-5">
          {/* <div className="">Item</div> */}
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center px-5 py-5 space-y-10 sm:space-y-24">
        <Header />
        <NetWorth />
      </main>
    </div>
  );
}

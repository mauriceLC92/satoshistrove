import { Header } from "../components/Header";
import { NetWorth } from "../components/NetWorth";

export default function Home() {
  return (
    <div className="min-height: 100vh; flex flex-col justify-center items-center">
      <header className="bg-orange-700 h-10 w-full">
        <nav>
          <div className="bg-orange-400 text-pink-500">Item</div>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center px-5 py-5 space-y-10 space-y-24">
        <Header />
        <NetWorth />
      </main>
    </div>
  );
}

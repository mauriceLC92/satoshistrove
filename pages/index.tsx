import { Header } from "../components/Header";
import { NetWorth } from "../components/NetWorth";

export default function Home() {
  return (
    <div className="min-height: 100vh; flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center px-5 py-5 space-y-10 space-y-24">
        <Header />
        <NetWorth />
      </main>
    </div>
  );
}

import Canvas from "@/src/components/Builder/Canvas";
import Sidebar from "@/src/components/Builder/SideBar";

export default function Home() {
  return (
    <main className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <Canvas />
    </main>
  );
}

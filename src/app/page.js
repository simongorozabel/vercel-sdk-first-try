import { Chat } from "./components/Chat";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1>App powered by AI</h1>
      <Chat />
    </main>
  );
}

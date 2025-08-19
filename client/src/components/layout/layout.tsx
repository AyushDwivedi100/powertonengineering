import Header from "./header";
import Footer from "./footer";
import Chatbot from "@/components/chatbot/chatbot";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

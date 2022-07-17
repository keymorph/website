import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import MembersSection from "../components/MembersSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div className="flex flex-row justify-between text-text-primary h-screen w-screen overflow-x-hidden">
      <div className="flex flex-col justify-between">
        <MainHeader />
        <MembersSection />
        <Footer />
      </div>
      <ProjectsSection />
    </div>
  );
}

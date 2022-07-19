import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import MembersSection from "../components/MembersSection";

export default function Home() {
  return (
    <div
      className={"relative text-text-primary min-h-screen w-screen select-none"}
    >
      <section className="flex sm:flex-col xl:flex-row justify-between gap-24 pb-20 overflow-x-hidden min-h-screen">
        <section className="flex flex-col">
          <MainHeader />
          <MembersSection />
        </section>
        <ProjectsSection />
      </section>
      <Footer />
    </div>
  );
}

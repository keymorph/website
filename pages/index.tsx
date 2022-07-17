import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import MembersSection from "../components/MembersSection";

export default function Home() {
  return (
    <div
      className={
        "flex flex-col justify-between bg-background-darker text-text-primary h-screen w-screen select-none"
      }
    >
      <section className="flex sm:flex-col xl:flex-row justify-between gap-24 overflow-x-hidden h-full">
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

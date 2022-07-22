import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import MembersSection from "../components/MembersSection";
import { getKeymorphCommitsForMembers } from "../utils";
import { Member, members } from "../models";

interface Props {
  sortedMembers: Member[];
}

export default function Home({sortedMembers}: Props) {
  return (
    <div
      className={"relative text-text-primary min-h-screen w-screen select-none"}
    >
      <section className="flex sm:flex-col xl:flex-row justify-between gap-24 pb-20 overflow-x-hidden min-h-screen">
        <section className="flex flex-col">
          <MainHeader/>
          <MembersSection sortedMembers={sortedMembers}/>
        </section>
        <ProjectsSection/>
      </section>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const commits = await getKeymorphCommitsForMembers();
  const membersWithCommits = members.map((member) => ({
    ...member,
    commitCount:
    commits[commits.findIndex((commit) => commit.url === member.githubURL)]
      .commitCount,
  }));
  const sortedMembers = membersWithCommits.sort(
    (a, b) => b.commitCount - a.commitCount
  );

  return {
    props: {
      sortedMembers,
    },
    revalidate: 3600, // At least these many seconds will pass until the page is revalidated
  };
}

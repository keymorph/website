import MemberCard from "../Cards/MemberCard";

export default function MemberList() {
  // Sort MemberCard by first letter
  const members = [
    {
      name: "Danny",
      imageURL:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHXhopUdvvKWA/profile-displayphoto-shrink_200_200/0/1621892753632?e=1663200000&v=beta&t=AKD9qfLhQca7ErgcPEa5i7p9aWes-594ocOSgRHbSc8",
      websiteURL: "https://example.com/1",
      githubURL: "https://example.com/2",
      linkedinURL: " https://example.com/3",
    },
    {
      name: "Dante",
      imageURL:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGC9nQX_myHvg/profile-displayphoto-shrink_200_200/0/1633033125111?e=1663200000&v=beta&t=h-nAeaUvzgk9MECqPLmBPjBP6_TCXzl1-Nw73k9hd4M",
      websiteURL: "https://example.com/1",
      githubURL: "https://example.com/2",
      linkedinURL: " https://example.com/3",
    },
    {
      name: "Evan",
      imageURL:
        "https://media-exp1.licdn.com/dms/image/D4D35AQGxQZblzNF-xA/profile-framedphoto-shrink_200_200/0/1621232916734?e=1658620800&v=beta&t=MGkWB_yRn53lyyPtJMOML2XKJDLF9ceE3znWs2bRd1U",
      websiteURL: "https://example.com/1",
      githubURL: "https://example.com/2",
      linkedinURL: " https://example.com/3",
    },
    {
      name: "Patrick",
      imageURL:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFboc_QyjTk_g/profile-displayphoto-shrink_200_200/0/1601854120403?e=1663200000&v=beta&t=0Doc6oxR1Pb7v-yOiF9OuUTgpxEW7FZVfxGI-nujSqw",
      websiteURL: "https://example.com/1",
      githubURL: "https://example.com/2",
      linkedinURL: " https://example.com/3",
    },
    {
      name: "Raciel",
      imageURL:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHbam2Vo9wVpA/profile-displayphoto-shrink_200_200/0/1650069111906?e=1663200000&v=beta&t=x5EY4iLtEC8sNuiLddrGF1cGLxFMrF0gfGd9S_1ZYnY",
      websiteURL: "https://raciel.dev",
      githubURL: "https://github.com/Rikimbili",
      linkedinURL: "https://www.linkedin.com/in/raciel-antela-pardo-216a141ab",
    },
    {
      name: "Rich",
      imageURL:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGKBegupxV1cQ/profile-displayphoto-shrink_200_200/0/1617722355590?e=1663200000&v=beta&t=0SAUzy_3oHMohF4WOqHjwC6YxPC3htlSdh6MH3YMgL4",
      websiteURL: "https://example.com/1",
      githubURL: "https://example.com/2",
      linkedinURL: " https://example.com/3",
    },
    {
      name: "Tevin",
      imageURL:
        "https://media-exp1.licdn.com/dms/image/C4E03AQHAPEWJLk_N6g/profile-displayphoto-shrink_200_200/0/1623943350006?e=1663200000&v=beta&t=_NcKivA3-9pTTzLbxjeIXchvEGry0XAQoguNimaPoXk",
      websiteURL: "https://example.com/1",
      githubURL: "https://example.com/2",
      linkedinURL: " https://example.com/3",
    },
  ];

  return (
    <div className="flex flex-row gap-10 flex-wrap justify-center">
      {members.map((member, index) => (
        <MemberCard
          key={index}
          index={index}
          name={member.name}
          imageURL={member.imageURL}
          websiteURL={member.websiteURL}
          githubURL={member.githubURL}
          linkedinURL={member.linkedinURL}
        />
      ))}
    </div>
  );
}

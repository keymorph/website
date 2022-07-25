// Add githubURL to members
import { members, projects } from "../models";

export async function getKeymorphCommitsForMembers() {
  let commitsForGithubURLs = members.map((member) => {
    return {
      url: member.githubURL,
      commitCount: 0,
    };
  });

  for (const project of projects) {
    // Remove the last character IF and only if it is a slash
    let githubURL = project.githubURL;
    if (project.githubURL.endsWith("/")) {
      githubURL = project.githubURL.slice(0, -1);
    }
    let githubProjectName = project.githubURL.substring(
      githubURL.lastIndexOf("/") + 1,
      githubURL.length
    );

    let currentPage = 1;
    while (currentPage > 0) {
      const response = await fetch(
        `https://api.github.com/repos/FourScript/${githubProjectName}/commits?page=${currentPage}&per_page=100`
      )
        .then((r) => r.json())
        .catch((e) => console.error(e.message));

      if (!response || response.length === 0 || response.message) {
        currentPage = 0;
      } else {
        for (const commit of response) {
          let commitURL = commit.author?.html_url;
          if (commitURL) {
            let commitURLIndex = commitsForGithubURLs.findIndex(
              (commitForGithubURL) =>
                commitForGithubURL.url.toLowerCase() === commitURL.toLowerCase()
            );
            if (commitURLIndex > -1) {
              commitsForGithubURLs[commitURLIndex].commitCount++;
            }
          }
        }
        currentPage++;
      }
    }
  }

  return commitsForGithubURLs;
}

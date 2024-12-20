export default {
  getLanguageDetails(language) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          package_managers: ["npm", "yarn", "pnpm"],
          frameworks: ["Next.js", "Node.js"],
          dependencies: ["Express", "Async", "Lodash", "React", "Axios"],
        });
      }, 500);
    });
  },
  initializeConfigs(config) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          new Blob(["binary data"], { type: "application/octet-stream" })
        );
      }, 500);
    });
  },
  getSnippets() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            content: "this is a snippet",
            tags: ["python", "script", "azure-devops"],
          },
          {
            id: 2,
            content: "this is another snippet",
            tags: ["kotlin", "controller", "authenticated"],
          },
        ]);
      }, 500);
    });
  },
  createSnippet(snippet) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Math.floor(Math.random() * 1000),
          content: snippet.content,
          tags: snippet.manual_tags,
        });
      }, 500);
    });
  },
  generateSnippet(prompt) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Math.floor(Math.random() * 1000),
          content: "this is a genai-generated snippet",
          tags: ["python", "flask", "rest", "postgres"],
        });
      }, 500);
    });
  },
};

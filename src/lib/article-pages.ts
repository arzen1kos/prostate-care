import decisionTree from '@contents/pages/decision_tree.json';

type ArticleReference = {
  articles?: string[];
  options: { articles: string[] }[];
};

const articleIds = new Set<string>();
const decisionNodes = Object.values(decisionTree.nodes) as ArticleReference[];

decisionNodes.forEach((node) => {
  node.articles?.forEach((id) => articleIds.add(id));
  node.options.forEach((option) => option.articles.forEach((id) => articleIds.add(id)));
});

const audiencePrefixes = new Set(['patient', 'family', 'support', 'researcher']);

function titleFromId(id: string) {
  const words = id.split('_');
  if (audiencePrefixes.has(words[0])) words.shift();
  return words.join(' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export const articlePages = [...articleIds].map((id) => ({
  slug: id,
  title: titleFromId(id),
}));

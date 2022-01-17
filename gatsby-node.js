const indexArticle = (index, tag, article) => {
    if (!index[tag]) {
        index[tag] = [];
    }
    index[tag].push(article);
};


exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const articleIndex = {};
    console.log("RUNNING QUERY")

    // query all articles and get their tags and slugs
    return graphql(`
        {
        allContentfulArticle(filter: {tags: {eq: "local"}}) {
          edges {
            node {
              title
              tags
              slug
              id
            }
          }
        }
      }
    `).then(result => {

        const articles = result.data.allContentfulArticle.edges;
        console.log(articles);
        console.log(articles[0]);
        articles.forEach((article, index) => {

            // create page for post 
            createPage({
                path: `/post/${article.node.slug}`,
                component: require.resolve("./src/templates/article.js"),
                context: {
                    id: article.node.id,
                },
            });

            // index each article for the tags it has
            article.node.tags.forEach(tag => {
                indexArticle(articleIndex, tag, article.node);
            });
        });

        // build index page for each tag
        Object.keys(articleIndex).forEach(tag => {

            createPage({
                path: `/tag/${tag}`,
                component: require.resolve("./src/templates/tagIndex.js"),
                context: {
                    tag: tag,
                    pages: articleIndex[tag], //pass all slugs to template, and it will query for those posts
                }
            });
        });
    })
};
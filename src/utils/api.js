export async function newsPagePostsQuery(lang) {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
                posts(where: {language: ${lang}}) {
                  nodes {
                    date
                    uri
                    title
                    commentCount
                    excerpt
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    featuredImage {
                      node {
                        mediaItemUrl
                        altText
                      }
                    }
                  }
                }
              }
            `
    })
  });
  const { data } = await response.json();
  return data.posts.nodes;
}

export async function findLatestPosts(lang) {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
                posts(first: 4 where: {language: ${lang}}) {
                  nodes {
                    date
                    uri
                    title
                    commentCount
                    excerpt
                    featuredImage {
                      node {
                        mediaItemUrl
                        altText
                      }
                    }
                  }
                }
              }
            `
    })
  });
  const { data } = await response.json();
  return data.posts.nodes;
}

export async function getNodeByURI(uri) {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
                nodeByUri(uri: $uri) {
                  __typename
                  isContentNode
                  isTermNode
                  ... on Post {
                    id
                    title
                    date
                    uri
                    excerpt
                    content
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    terms {
                      nodes {
                        name
                        slug
                      }
                    }
                    featuredImage {
                      node {
                        mediaItemUrl
                        altText
                      }
                    }
                    language {
                      slug
                    }
                  }
                  ... on Page {
                    id
                    title
                    uri
                    date
                    content
                    language {
                      slug
                    }
                  }
                }
              }
            `,
      variables: {
        uri: uri
      }
    })
  });
  const { data } = await response.json();
  return data;
}

export async function getAllUris() {
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query GetAllUris {
            posts(first: 100) {
              nodes {
                uri
              }
            }
            pages {
              nodes {
                uri
              }
            }
          }
          `
    })
  });
  const { data } = await response.json();
  const uris = Object.values(data)
    .reduce(function (acc, currentValue) {
      return acc.concat(currentValue.nodes)
    }, [])
    .filter(node => node.uri !== null)
    .map(node => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1)
      return {
        params: {
          uri: decodeURI(trimmedURI)
        }
      }
    })
  return uris;
}
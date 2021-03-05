// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreatePage
// Called when a new page is created.
exports.onCreatePage = async ({ page, actions }) => {
  if (page.path.match(/^\/api/)) {
    page.matchPath = `/api/*`
    actions.createPage(page)
  }

  if (page.path.match(/^\/test/)) {
    page.matchPath = `/test/*`
    actions.createPage(page)
  }
}

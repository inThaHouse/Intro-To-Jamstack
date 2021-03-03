const byRepoListItemLink = ({ html_url, name, stargazers_count }) => `
<li>
  <a href='${html_url}' target='__blank'>${name}</a> 
  (⭐️ ${stargazers_count})
</li>
`

const listRepos = async (username) => {
  const content = document.getElementById('content')
  const githubURL = `https://api.github.com/users/${username}/repos?type=owner&sort=updated`

  const repos = await fetch(githubURL).then((response) => response.json())
  const markup = repos.map(byRepoListItemLink)

  content.innerHTML = `<ul>${markup.join('')}</ul>`
}

listRepos('inthahouse')

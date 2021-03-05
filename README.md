# Introduction to the Jamstack

This repo hosts code/notes taken from the course https://frontendmasters.com/courses/jamstack/

## Intro & Overview

- Javascript - API - Markup
- Emphasizes shipping only static assets.
- Benefits: Reduced complexity, Lower Cost, Faster Shipping etc.
- We're making the complexity of backends and devops stuff someone else's responsibility.
- Jamstack apps allow us to use only a CDN, which lets us skip servers, dbs, load balancers etc.
- Better security: When you ship only static assets, there are no server to attack.
- CDN are designed for scale.
- Course agenda
  1. Basic site
  2. Deployments
  3. Quick intro to serverless functions
  4. Protect content with auth
  5. Handle read/write persisted data.

## My Own Notes

- Netlify CLI helps you manage your continuous deployment from the command line.
- https://docs.netlify.com/cli/get-started/
- You can open up a PR and Netlify can provide a preview link from that PR branch.
- You can easily roll back to any previous branches using the Netlify UI.

<details>
<summary>Serverless Contact Form</summary>

- You can give an alias to your serverless calls in the netlify configs. See `sections/contact/netlify.toml`
- Format for a serverless functions is we have to name the variable handler.
- After booting your app, you can test your serverless functions on path `/.netlify/functions/${fileInFolder}` (or the alias you put in the netlify config file)
- Cloud is basically other peoples computer.
</details>

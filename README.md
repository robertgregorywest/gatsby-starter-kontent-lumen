[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Kentico/gatsby-kontent-starter-lumen/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2adc83d6-9eba-45fc-b95c-c205e75d3189/deploy-status)](https://app.netlify.com/sites/gatsby-starter-kontent-lumen/deploys)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-cloud)
[![Live demo](https://img.shields.io/badge/-Live%20Demo-brightgreen.svg)](https://gatsby-starter-kontent-lumen.netlify.com/)

# Gatsby Starter Kontent Lumen

Lumen is a minimal, lightweight and mobile-first starter for creating blogs using
[Gatsby](https://github.com/gatsbyjs/gatsby).

This is an edited clone of
[gatsby-starter-lumen](https://github.com/alxshelepenok/gatsby-starter-lumen) and [gatsby-v2-starter-lumen](https://github.com/GatsbyCentral/gatsby-v2-starter-lumen)
migrated for getting content from headless CMS
[Kontent](https://kontent.ai/).

## Screenshot
![Page Screenshot](https://i.imgur.com/jVImqT2.jpg)

## Features
+ Content from [Kontent](http://kontent.ai/) headless CMS.
+ Lost Grid ([peterramsing/lost](https://github.com/peterramsing/lost)).
+ Beautiful typography inspired by [matejlatin/Gutenberg](https://github.com/matejlatin/Gutenberg).
+ [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development.
+ Stylesheet built using SASS and [BEM](http://getbem.com/naming/)-Style naming.
+ Syntax highlighting in code blocks.
+ Sidebar menu built using a configuration block.
+ Archive organized by tags and categories.
+ Automatic Sitemap generation.
+ Google Analytics support.


## Getting Started
Install this starter (assuming Gatsby is installed) by running from your CLI:
`gatsby new gatsby-starter-kontent-lumen https://github.com/kentico/gatsby-starter-kontent-lumen`

### Import sample data and content structure from the source project into your project using Kontent Backup Manager (CLI)

1. Create a free (target) project in app.kontent.ai
1. Get a [projectId](https://docs.kontent.ai/reference/management-api-v2#section/Authentication) and a [CM API key](https://docs.kontent.ai/reference/management-api-v2#section/Authentication) of the newly created (target) project
1. Install Kontent Backup Manager globally: `npm i wip-backup-manager -g`
1. Restore project from `kontent.backup.zip` file using command: 
`kbm --action=restore --apiKey=<CM API key> --projectId=<projectId> --zipFilename=kontent-backup`
1. Use target `projectId` in the `gatsby-config.json`
1. Publish all the imported items in the kontent.ai web UI

<details>
  <summary>Alternatively, you can use the Template Manager (web UI) for importing the content.</summary>
  
### Import sample data and content structure from the source project into your project using the Template Manager (web UI)
1. Create a free project in app.kontent.ai
1. Get a [projectId](https://docs.kontent.ai/reference/management-api-v2#section/Authentication) and a [CM API key](https://docs.kontent.ai/reference/management-api-v2#section/Authentication) of the newly created (target) project
1. Go to Kontent [Template Manager](https://kentico.github.io/kontent-template-manager/) and enter copied `projectId` and `CM API key` into *Target Project* section
1. Into *Source Project* section copy `00676a8d-358c-0084-f2f2-33ed466c480a` projectId and `en-US` and `cs-CZ` language codenames
1. Click on `Prepare import data`
1. Click on `Proceed with import`
1. Use target `projectId` in the `gatsby-config.json`
1. Publish all the imported items in the kontent.ai web UI
</details>

### Running in Development
`gatsby develop`

### Building
`gatsby build`

### Production Deploy
Before deploying to production add own google analytics `trackingId` to `gatsby-config.js`. 

### Deploy with Netlify 

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/kentico/gatsby-starter-kontent-lumen" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

## Updating the content in the source project

For updating sample data edit the source project `00676a8d-358c-0084-f2f2-33ed466c480a` and update backup package which is part of this repo using [Kontent Backup Manager](https://github.com/Enngage/kontent-backup-manager)

`kbm --action=backup --apiKey=<Management API
 key from project settings> --projectId=00676a8d-358c-0084-f2f2-33ed466c480a --zipFilename=kontent-backup`

## Folder Structure

```
└── src
    ├── assets
    │   ├── fonts
    │   │   └── fontello-771c82e0
    │   │       ├── css
    │   │       └── font
    │   └── scss
    │       ├── base
    │       ├── mixins
    │       └── pages
    ├── components
    │   ├── Article
    │   ├── ArticleTemplateDetails
    │   ├── CategoryTemplateDetails
    │   ├── Links
    │   ├── Layout
    │   ├── Menu
    │   ├── PageTemplateDetails
    │   ├── Sidebar
    │   └── TagTemplateDetails
    ├── pages
    └── templates
```

![Analytics](https://kentico-ga-beacon.azurewebsites.net/api/UA-69014260-4/Kentico/gatsby-starter-kontent-lumen?pixel)

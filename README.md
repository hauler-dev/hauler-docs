# Rancher Government Hauler Docs

## Local Development

### Installing Dependencies (docusaurus)

```bash
git clone https://github.com/rancherfederal/hauler-docs
cd hauler-docs

# install docusaurus & dependencies from package.json
npm install # make sure you are in the root of the dir containing `package.json`
# yarn install # if npm install did not work

# test the installation
npx docusaurus --version
```

### Deploy Locally

```bash
npm run start # this will open your default browser to http://localhost:3000
```

## Creating Content

[Official Docusaurus Documentation](https://docusaurus.io/docs/creating-pages)

## Publishing Content

This docs site is served using github-pages. There is an [action](.github/workflows/deploy.yml) that will trigger upon commit to the `main` branch and deploy the new build to https://rancherfederal.github.io/hauler-docs.

## Contributing

- Fork this repository
- Make your changes
- Commit changes and reference the Issue
- Submit Pull Request with changes

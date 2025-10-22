# Hauler Docs

![rancher-government-hauler-logo](/static/img/rgs-hauler-logo.png)

## Local Development

### Installing Dependencies (docusaurus)

```bash
git clone https://github.com/hauler-dev/hauler-docs
cd hauler-docs

# install docusaurus & dependencies from package.json
# make sure you are in the root directory
npm install

# if npm install did not work
# yarn install

# test the installation
npx docusaurus --version
```

### Deploy Locally

```bash
# this will build the docs and open your default browser to http://localhost:3000
npm run start
```

## Creating Content

[Official Docusaurus Documentation](https://docusaurus.io/docs/creating-pages)

## Publishing Content

This docs site is served using `GitHub Pages`. There is an [action](.github/workflows/deploy.yaml) that will trigger upon commit to the `main` branch and deploy the new build to https://docs.hauler.dev (previously https://hauler.dev).

## Contributing

- Fork this Repository
- Make your Changes
- Commit changes and Reference the Issue
- Submit Pull Request with Changes

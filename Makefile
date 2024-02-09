# Makefile for hauler-docs

# run all build commands
all: install build serve

# install dependencies
install:
	npm install

# test and run hauler-docs
# opens localhost:3000/hauler-docs
test:
	npm run start

# cut new version of hauler-docs
# make version v=0.0.0
version:
	npm run docusaurus docs:version ${v}

# build and compile hauler-docs
build:
	npm run build

# server hauler-docs from build
# opens localhost:5000/hauler-docs
serve:
	npm run serve

# clear build outputs
clear:
	npm run clear && rm -rf node_modules

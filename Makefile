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

# clean build outputs
clean:
	npm run clear && rm -rf node_modules

# check for dependency updates
outdated:
	npm outdated || true

# bump dependencies to the latest versions their ranges allow
bump-outdated:
	npm update --save

# sync known limits from hauler-dev/hauler readme
# make known-limits HAULER_REF=release/2.1
HAULER_REF ?= main
HAULER_README ?= https://raw.githubusercontent.com/hauler-dev/hauler/$(HAULER_REF)/README.md
KNOWN_LIMITS = docs/known-limits.md
known-limits:
	@curl -fsSL $(HAULER_README) -o $(KNOWN_LIMITS).readme || { echo "failed to fetch [$(HAULER_README)]"; rm -f $(KNOWN_LIMITS).readme; exit 1; }
	@sed -n '/<!-- known-limits:start -->/,/<!-- known-limits:end -->/p' $(KNOWN_LIMITS).readme | sed '1d;$$d' | sed -E 's/^#(#+) /\1 /' > $(KNOWN_LIMITS).block
	@test -s $(KNOWN_LIMITS).block || { echo "failed to find known limits markers in [$(HAULER_README)]"; rm -f $(KNOWN_LIMITS).readme $(KNOWN_LIMITS).block; exit 1; }
	@awk '/^---$$/{n++; print; if (n==2) exit; next} {print}' $(KNOWN_LIMITS) > $(KNOWN_LIMITS).tmp
	@echo >> $(KNOWN_LIMITS).tmp
	@cat $(KNOWN_LIMITS).block >> $(KNOWN_LIMITS).tmp
	@mv $(KNOWN_LIMITS).tmp $(KNOWN_LIMITS)
	@rm -f $(KNOWN_LIMITS).readme $(KNOWN_LIMITS).block
	@echo "synced known limits from [$(HAULER_README)]"

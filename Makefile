.PHONY: all update-technical-docs serve
.DEFAULT_GOAL := all


all: install-theme install-technical-docs
	hugo --minify

# updates the submodule pointer to gardenlinux to the latest commit of main
update-technical-docs:
	cd deps/gardenlinux
	git pull origin master
	cd ../..
	git add deps/gardenlinux
	git commit -m "Update to latest gardenlinux technical docs"

install-technical-docs:
	git submodule update deps/gardenlinux
	cp -r deps/gardenlinux/docs/* content/documentation

install-theme:
	git submodule update themes/learn

serve:
	hugo -D server

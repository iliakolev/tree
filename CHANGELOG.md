# tree-starter-kit Changelog

## [0.8.10] - 2015-06-16

* rename package tree-tables to tree-table
* Bump grunt-autoprefixer to v3.0.0
* Bump grunt-contrib-cssmin to v0.12.3
* Bump grunt-contrib-jshint to v0.11.2
* Bump grunt-contrib-uglify to v0.9.1
* Bump grunt-html to v4.0.3
* Bump grunt-jscs to v1.8.0
* Bump load-grunt-tasks to v3.2.0
* Bump time-grunt to v1.2.1

## [0.8.9] - 2015-04-06

* index.html - Add Google analytics snippet.
* Use `<meta http-equiv="x-ua-compatible" content="ie=edge">` instead of `<meta
  http-equiv="X-UA-Compatible" content="IE=edge">`.
* Bump tree-normalize to v3.0.4
* Bump tree-hidden to v0.3.1
* Bump tree-visible to v0.2.1
* Bump grunt-autoprefixer to v3.0.0
* Bump grunt-contib-connect to v0.10.1
* Bump grunt-scss-lint to v0.3.6


## [0.8.8] - 2015-04-01

* Add tree-ratio module.
* Bump bower v1.4.1
* package.json - specify the version of node that stuff works on

## [0.8.7] -2015-03-31

* Bump bower v1.4.0
* Bump grunt-contrib-uglify v0.8.1
* Bump tree-visible v0.2.0 (add responsive classes).
* Bump tree-hidden v0.3.0 (add responsive classes).
* [DEPRECATE] tree-hidden-responsive module (merged into tree-hidden).

## [0.8.6] - 2015-03-30

* Add new bower package tree-visible v0.1.0
* Bump tree-hidden v0.2.1
* Bump grunt-jscs v1.6.0

## [0.8.5] - 2015-03-25

* New www/dist/ directory to hold css and js files.
* Move .scss-lint.yml to www/sass/ dir.
* Move .jshintrc to www/js/ dir.
* Move main.js to www/js/ dir.
* index.html fix paths.
* Gruntfile Changes:
    * Remove bowercopy (simplify).
    * Remove git-grunt; added load-grunt-tasks.
    * Remove grunt-csso; added grunt-contrib-cssmin.
    * Remove grunt-browser-sync.
    * Add grunt-contrib-clean.
    * Add grunt-html.
    * Add grunt-jscs.
    * Add grunt-contrib-connect.
    * Default tasks: dist-css, dist-js, dist, validate-budget, validate-html,
      build, default, test and server.
* main.csss - Import tree packages directly from bower_components folder.


## [0.8.4] - 2015-03-21

* Bump dependencies:
    * scss-lint v0.35.0
    * grunt-contrib-jshint v0.11.1

## [0.8.3] - 2015-03-16

[BREAKING] Promote tree-lede to Trump layer; utility class: .u-.

## [0.8.2] - 2015-03-15

* Bump dependencies:
    * tree-link-clean v0.2.0
    * tree-link-block v0.2.0

## [0.8.1] - 2015-03-15

[BREAKING] Promote tree-link-clean and tree-link-block to Trump layer.

* Bump dependencies:
    * grunt-csso v0.7.1

## [0.8.0] - 2015-03-08

* [FEATURE] New widths mixin to generate a wider array of classes.
* Bump dependencies:
    * grunt-contib-ugllify v0.8.0
    * grunt-contrib-concat v0.5.1
    * time-grunt v1.1.0
    * tree-responsive-settings v0.1.4; Switch from px to em based media queries.
    * tree-clearfix v0.2.8
    * [BREAKING] tree-widths v0.3.0; Uses new widths mixin.
    * [BREAKING] tree-widths-responsive v0.2.0; Uses new widths mixin.
    * [BREAKING] tree-hidden v0.2.0; Added utility class: u-; Derpecate
      placeholders.
    * [BREAKING] tree-hidden-responsive v0.2.0; Added utility class: u-.
    * [FEATURE] tree-spacing v0.1.6; Option to alter tiny, small, large and huge
      margins/paddings.

## [0.7.1] - 2015-02-27

* Bump Gems
    * sass
    * scss-lint
* Update .travis.yml
* Update .scss-lint.yml

## 0.7.0

* Rename tree-paragraphs to [tree-lede](https://github.com/treeframework/base.lede).
* Add new module [tree-headings-trump](https://github.com/treeframework/trump.headings).
* Bump dependencies.

## 0.6.14

* Bump [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
  v0.11.0
    - Update to JSHint ~2.6.0.

## 0.6.13

* Bump [scss-lint](https://github.com/causes/scss-lint) v0.33.0

## 0.6.12

* Remove config.rb ( Compass is no longer required )
* Remove [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)
* Add [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)
* Bump [tree-page](https://github.com/treeframework/base.page) v0.2.1


## 0.6.11

* Update rules in .scss-lint.yml:
    - allow element with attribute
    - ignore vendor prefixes:
        - www/sass/base/_page.scss
        - www/sass/generic/_box-sizing.scss

* Set scss-lint gem version v0.32.0
* Bump [tree-nav](https://github.com/treeframework/object.nav) v0.2.0

## 0.6.10

* Bump [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) 2.2.0

## 0.6.9

* Revert pack to individual packages instead of a bundle.

## 0.6.8

* Bump [tree-starter-kit](https://github.com/treeframework/tree-starter-kit)
  0.1.3

## 0.6.7

* Bump [tree-starter-kit](https://github.com/treeframework/tree-starter-kit)
  0.1.2
* Add JQuery as a bower dependency.

## 0.6.6

* Bump Gemfile.lock

## 0.6.5

* Bundle tree bower dependencies into [tree-starter-kit](https://github.com/treeframework/tree-starter-kit).

## 0.6.4

* Bump grunt-csso to 0.7.0

## 0.6.3

* Bump tree-mixins, treeframework-headings, tree-paragraphs.

## 0.6.2

* Update grunt-autoprefixer from 2.0.0 to 2.1.0

## 0.6.1

* Bump grunt dependencies.

## 0.6.0

* Add [tree-hidden-responsive](https://github.com/treeframework/trump.hidden-responsive)

## 0.5.0

* Add [tree-hidden](https://github.com/treeframework/trump.hidden)

## 0.4.17

* Remove html-inspector.

## 0.4.16

* Enable CSS Source Maps in Compass.
* Enable Autoprefixer support for Source Maps.

## 0.4.12

* Bump grunt-csso to 0.6.5

## 0.4.11

* Rename grunt task from 'grunt bower' to 'grunt depend'.

## 0.4.10

* Bump grunt- dependencies.

## 0.4.9

* Add grunt task for performance budgeting (grunt-perfbudget).

## 0.4.8

* grunt-scss-lint - move exclude files to Gruntfile.js

## 0.4.7

* Remove `www/assets` folder

## 0.2.0

* Add Bower
* Add html5shim
* Bump Grunt packages
* Small 'Grunfile.js' tweaks

Node Backend Gulp
=================

Some default gulp tasks for Node.js modules

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Tasks](#tasks)
  - [Code Quality](#code-quality)
  - [Documentation](#documentation)
  - [Unit Tests](#unit-tests)
  - [Security](#security)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Tasks

* **default**: Define some default behaviour if a user calls `gulp`. Tasks `code-quality` and `unit-test` will be executed.
* **watcher**: Main watcher tasks which executes every sub-task's watcher.


### Code Quality

* **jscs**: JavaScript code sniffer tasks.
* **jshint**: Run code quality checks via jshint.
* **all**: Run _jshint_ and _jscs_ tasks.
* **watcher**: Run all tasks as in _all_, but also watch for file changes.


### Documentation

* JSDoc
** **doc-api**: Generate api documentation of files in folder `source/controllers`. You can overwrite this path via: `global.files.doc.src.api`.
** **doc-code**: Generate a jsdoc documentation by jsdoc doc comment annotations. You can change the source folder via: `global.config.files.doc.src.webservice`.
* Markdown
** **doc-markdown-readme**: Update a project's readme file and append a toc to it.
** **doc-markdown-github-pages**: Create jsdoc documentation, convert it to Markdown and copy it to `./docs-gh/` for importing them into the project's github wiki.
** **doc-markdown**: Execute all `doc-markdown-*` tasks.
* **all**: Run tasks _doc-api_ and _doc-code_.
* **watch**: Same tasks as in _all_, but also watch for file changes.


### Unit Tests

* **unit-test-mocha**: Run mocha unit tests for files `test/**/*.spec.js`. You can change the source folder via `global.config.files.test` and you must adjust mocha's config file in `global.config.files.testConfig`.
* **all**: Run all unit tess tasks at once.
* **watch**: Same tasks as in _all_, but also watch for file changes.


### Security

* **nsp**: Contains tasks to check `package.json` and `npm-shrinkwrap.json` against `nsp` (Node Security Project audit).
* **all**: Run all unit tess tasks at once.

# node-backend-gulp

Some default gulp tasks for Node.js modules

## Tasks

* **default**: Define some default behaviour if a user calls `gulp`. Tasks `code-quality` and `unit-test` will be executed.
* **watcher**: Main watcher tasks which executes every sub-task's watcher.


### Code Quality

* **jscs**: JavaScript code sniffer tasks.
* **jshint**: Run code quality checks via jshint.
* **all**: Run _jshint_ and _jscs_ tasks.
* **watcher**: Run all tasks as in _all_, but also watch for file changes.


### Documentation

* **doc-api**: Generate api documentation of files in folder `source/controllers`. You can overwrite this path via: `global.files.doc.src.api`.
* **doc-code**: Generate a jsdoc documentation by jsdoc doc comment annotations. You can change the source folder via: `global.config.files.doc.src.webservice`.
* **all**: Run tasks _doc-api_ and _doc-code_.
* **watch**: Same tasks as in _all_, but also watch for file changes.


### Unit Tests

* **unit-test-mocha**: Run mocha unit tests for files `test/**/*.spec.js`. You can change the source folder via `global.config.files.test` and you must adjust mocha's config file in `global.config.files.testConfig`.
* **all**: Run all unit tess tasks at once.
* **watch**: Same tasks as in _all_, but also watch for file changes.


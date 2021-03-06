# 1.1.3

- Create directory `doc/` if it does not exist yet.
- Update shrinkwrap and `gulp-nsp`.

# 1.1.2

- Fix of task `doc-api`.

# 1.1.1

- Fix file name typo in task `jscs`.

# 1.1.0

- Update dependencies to their latest version to reduce security issues.

# 1.0.10

- Updated tasks to generate documentation.

# 1.0.9

- Fixed task `doc-markdown-github-pages`.
- Adjusted code-quality tasks `jshint`, `jscs` and `all` to load their proper config files.

# 1.0.8

- Renamed `documentation/doctoc.js` to `documentation/md-doctoc.js`
- Added new task `documentation/md-jsdoc.js` to convert documentation created by jsdoc to Markdown files for usage in Github.

# 1.0.7

- Added support to create a toc in project's `README.md` file.

# 1.0.6

- Updated doc task to use the proper binary file location of `jsdoc`.

# 1.0.5

- Updated `npm-shrinkwrap.json`

# 1.0.4

- Added missing module `jsdoc`.

# 1.0.3

- Adjusted task `nsp` to continue execution despite occurring errors during runtime.

# 1.0.2

- Added new gulp task `nsp`, `nsp-package` and `nsp-shrinkwrap` to check the project's packages.
- Added `npm-shrinkwrap.json` to the project.

# 1.0.1

- Removed unused dependencies.

# 1.0.0

- Initial version
- Added tasks for `code quality`, `documentation`, `unit tests`, `watchers` and default behaviour.

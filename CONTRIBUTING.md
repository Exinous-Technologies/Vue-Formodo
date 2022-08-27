# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.
   
## Branch naming rule

Please ensure the branch name sticks to this regex pattern:

```
^(development|master|(features|tests|docs|bugfix|hotfix)(\/[a-zA-Z0-9]+([-_][a-zA-Z0-9]+)*){1,2}|release\/[0-9]+(\.[0-9]+)*(-(alpha|beta|rc)[0-9]*)?)$
```

#### Example:
- features/login_module
- tests/login_module
- docs/order_module
- hotfix/unable_to_login
- release/2.1.1-alpha
- release/4.6.8-beta
- release/3.0.0-rc

## Commit message rule

Please ensure the commit message is in this format:

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: Optional, can be anything specifying the scope of the commit change.
  |                          For example $location|$browser|$compile|$rootScope|ngHref|ngClick|ngView, etc.
  |                          In App Development, scope can be a page, a module or a component.
  │
  └─⫸ Commit Type: feat|fix|docs|style|refactor|test|chore|perf|ci|build|temp
```

#### Bad:

> Correct spelling of CHANGELOG.

#### Good:

> docs: correct spelling of CHANGELOG

#### Good (commit message with scope):

> docs(CHANGELOG): correct spelling

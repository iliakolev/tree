# Maintaining

Steps for updating and releasing changes to tree-starter-kit.

## Versioning

tree-starter-kit follows the semantic versioning approach:

- Bug fixes and docs updates are patch releases, so `1.0.x`.
- New additions are minor updates, so `1.x.x`.
- Deleting or rewriting anything are major updates, so `x.x.x`.

## Changelogs and milestones

Changelogs are handled with dedicated tracking issues ([see example](https://github.com/treeframework/tree-starter-kit/issues/16)). 

When starting work on a new release:

1. Open a new milestone.
2. Open a new tracking issue.
3. As you close issues and merge pull requests, add a link to those threads to the tracking issue.

When the release and milestone are about ready to ship, move on the the releasing flow.

## Releasing

Have a new version to release?

1. Bump the version number in `package.json`.
2. Run `$ grunt` to generate the latest compiled CSS and Parker stats.
3. Put any remaining open issues and PRs on the milestone to the next milestone, then close that milestone.
4. Head to <https://github.com/treeframework/tree-starter-kit/releases/> and create a new release. Title it `vX.X.X` and post the changelog to the body.

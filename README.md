# package-name

The simplest typescript package template I can think of.

- Node built-in testing: `node:test` and `node:assert`
- TypeScript with Node's `--experimental-strip-types` instead of compiling
- Develop, test, debug directly in your code with VSCode's built-in features, no CLI + console.log shenanigans
- Publish with `npm version` and a GitHub action

## Setting up

1. Install [Node Test Runner Extension](https://marketplace.visualstudio.com/items?itemName=connor4312.nodejs-testing)
2. Click the "Testing" tab in the VSCode Activity Bar
3. Reload VSCode Window or restart vscode if you don't see any tests in the sidebar

## Development

1. Open a test file
2. Click the testing buttons in the gutter to run a test
3. Set breakpoints in the gutter and run the test in the debugger (click the play button in the error popup with the bug on it)

**Keyboard shortcuts**

- Run all tests in the current **f**ile with `Command + ; + f`
- Run **c**urrent test at the cursor with `Command + ; + c`

## Playing around

You can run any file in the debugger with F5. Or click the debug icon in the Activity Bar and click the play button up top.

## CI Scripts

```sh
# run tests
pnpm test
# compile typescript to ./dist
pnpm build
```

## Releasing

**Setup**

First add an NPM token to your GitHub repository secrets. Log into npm to get one.

**Publishing a Release**

Create a tag and update package.json with `npm version`

```sh
# npm version patch | minor | major
npm version patch
```

Then push to GitHub.

```sh
git push origin main --tags
```

The GitHub action will match the tag and release.

# Electron project with Typescript
If you have the client in another place, you can also connect to it using `npm run start:dev`

# Usage
## `npm run start`
> npm run start
It runs `nodemon` which will:
1. Delete `out/`
2. Compile the Typescript inside `src/` to JS inside `out/`
3. Copy `src/client/` to `out/`
4. Start electron opening `src/client/index.html`
5. Watch for any changes inside `src/` and re-start the run process

## `npm run start:dev`
> npm run start:dev
It runs `nodemon` which will:
1. Set `NODE_ENV` to `development`
2. Delete `out/`
3. Compile the Typescript inside `src/` to JS inside `out/`
4. Copy `src/client/index.html` to `out/`, but it's not used (see #5 below)
5. Start electron opening `http://localhost:5173`
6. Watch for any changes inside `src/` and re-start the run process
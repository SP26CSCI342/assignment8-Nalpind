[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/jYpz8rDY)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24039236&assignment_repo_type=AssignmentRepo)

## Live URLs

- **Client:** https://assignment8-nalpind.vercel.app
- **Server:** https://platescout-nalpind.onrender.com
- **Server health check:** https://platescout-nalpind.onrender.com/api/health

## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URI` + `JWT_SECRET`
3. From the root: `npm install` (client) and `cd server && npm install` (server)
4. Two terminals: `npm run dev` (root, client) + `npm run dev` (server)
5. Open http://localhost:5173

## What I learned during deployment

    I was surprised that you actually needed two separate parts for an actual website to be able run, I thought that backend and frontend were connected and not ran separately. The longest part to debug was changing the fetch calls to include the baseUrl, at first I didn't read past and was only looking at the instructions before step 6 so it kept telling me the server was not running. I would probably read the entire instruction document before starting coding.
    
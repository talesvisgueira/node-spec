
npm install -g pnpm

mkdir pnpm-monorepo 
cd pnpm-monorepo 
pnpm init

nano pnpm-workspace.yaml
packages:   
 - 'packages/*'   
 - 'apps/*'

mkdir apps
mkdir packages

pnpm create vite apps/ui

pnpx @nestjs/cli new apps/api

pnpm --filter ui dev
 pnpm --filter api start:dev

nano package.json
"scripts": {
    "start:ui": "pnpm --filter ui dev", 
    "start:api": "pnpm --filter api start:dev",
    "start": "pnpm run start:ui & pnpm run start:api",
    "build": "pnpm recursive run build",
    "test": "pnpm recursive run test"
 }

pnpm start:ui // It will run UI app
pnpm start:api // It will run API app
pnpm start // It will run both apps
pnpm test // it will test on all workspaces


2) CRIAR UMA BIBLIOTECA DE LOG
mkdir -p packages/logger
cd packages/logger
pnpm init

nano packages/logger/src/index.ts
export const Logger = (message: string) => {
    console.log(`${'Logger - ' + new Date().toISOString() + ': ' + message}`)
}
export default Logger;

2.3 - Adicione o typescript na biblioteca Logger
pnpm add --filter logger typescript 

pnpm add ./packages/logger --workspace-root

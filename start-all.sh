(killall MainThread || true) && ((cd client && npm run dev) & 
(cd server && npx tsx bootstrap.ts ) & 
(cd ./server && npx tsx automation.ts && cd ./../client/e2e/both && PWDEBUG=0 npx tsx empty.spec.ts))
(killall MainThread || true) && ((cd client && npm run dev) & 
(cd server && npx tsx bootstrap.ts ) & 
(cd ./server && npx tsx automation.ts && cd ./../client/e2e/both && PWDEBUG=0 npx tsx empty.spec.ts))

#npx tsx ./server/resetValkey.ts && PGPASSWORD=This4Now! psql -U postgres -h localhost -d awesumDev -p 5432 -f ./server/postgresSchemas.sql && (killall chrome || true) && (cd ./client/e2e/both && PWDEBUG=0 npx playwright test empty.spec.ts)
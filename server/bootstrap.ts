const args = process.argv.slice(2);
const envKeyArg = args.find(arg => arg == "--env");
const envPath = envKeyArg ? args[args.indexOf(envKeyArg) + 1] : null
import dotenv from 'dotenv';
import path from 'path';
if (envPath) {  
  dotenv.config({ path: envPath,override: true });
} else {
    dotenv.config({ path: "dev.env",override: true });
}
console.log(1)

//dynamically call index.ts
const indexPath = path.join(process.cwd(), "index.ts");
import(indexPath);
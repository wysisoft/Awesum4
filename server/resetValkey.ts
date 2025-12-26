import { createClient } from "redis";
setTimeout(async () => {
    const pub = createClient();
    await pub.connect();
    await pub.flushAll();
    await pub.destroy();
  }, 4000);
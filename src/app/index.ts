import * as Hapi from "@hapi/hapi";
import { registerRoutes } from "./routes";
import { config } from "./config";

const init = async () => {
  const server = Hapi.server({
    port: config.port,
    host: config.host,
  });
  registerRoutes(server);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

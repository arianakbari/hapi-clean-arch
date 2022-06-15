import * as Hapi from "@hapi/hapi";
import { registerRoutes } from "./routes";
import { config } from "./config";
import { Logger, LOG_LABELS } from "./helpers/logger";

const init = async () => {
  const server = Hapi.server({
    port: config.port,
    host: config.host,
  });
  registerRoutes(server);

  await server.start();

  Logger.info(LOG_LABELS.START_APP, `Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  Logger.error(LOG_LABELS.UNHANDLED_INTERNAL_ERROR, "Error", err as Error);
  process.exit(1);
});

init();

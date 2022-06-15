import * as Hapi from "@hapi/hapi";
import { jobRoutes } from "./v1/JobRoutes";

export function registerRoutes(server: Hapi.Server) {
  server.route(jobRoutes);
}

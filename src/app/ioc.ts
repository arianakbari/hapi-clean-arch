import { Container } from "inversify";

import { IJobRepository } from "domain/boundaries/output/IJobRepository";
import { IJobService } from "domain/boundaries/input/IJobService";
import { JobRepository } from "./services/JobRepository";
import { JobService } from "domain/services/JobService";

import { TYPES } from "domain/types";

export const container = new Container();

container
  .bind<IJobRepository>(TYPES.JobRepository)
  .to(JobRepository)
  .inSingletonScope();

container.bind<IJobService>(TYPES.JobService).to(JobService).inSingletonScope();

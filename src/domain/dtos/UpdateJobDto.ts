import { JobStatus } from "domain/entities/Job";

export class UpdateJobDto {
  contactEmail?: string;
  status!: JobStatus;
}

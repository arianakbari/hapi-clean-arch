import { JobStatus, JobType } from "domain/entities/Job";

export class AddJobDto {
  type!: JobType;
  priceInPence!: number;
  status!: JobStatus;
  contactEmail?: string;
}

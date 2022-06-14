import { IJob } from "domain/entities/Job";
import { AddJobDto } from "domain/dtos/AddJobDto";
import { UpdateJobDto } from "domain/dtos/UpdateJobDto";

export interface IJobService {
  findAll(): IJob[];
  findById(id: string): IJob;
  add(job: AddJobDto): IJob;
  update(id: string, data: UpdateJobDto): IJob;
  delete(id: string): void;
}

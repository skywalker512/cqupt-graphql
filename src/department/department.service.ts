import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department) private readonly departmentRepo: Repository<Department>
  ) {}

  async creatDepartment(name: string) {
    const department = await this.departmentRepo.save(this.departmentRepo.create({ name }))
    return department
  }

  async findAllDepartments() {
    const departments = await this.departmentRepo.find()
    return departments
  }
}

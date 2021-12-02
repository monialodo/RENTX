import { Specification } from "../model/Specifications";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  findByName(name: string): Specification;
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ICreateSpecificationDTO, ISpecificationRepository };

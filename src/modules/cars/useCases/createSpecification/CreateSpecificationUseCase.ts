import { AppError } from "@shared/errors/AppError";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { inject, injectable } from "tsyringe";


interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject ("SpecificationsRepository")
    private specificationRepository: ISpecificationRepository) {}

  async execute({ name, description }: IRequest): Promise <void> {
    const specificationAlreadyExist = await this.specificationRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new AppError("Specification Already Exists");
    }

    await this.specificationRepository.create({
      name,
      description,
    });
  }
}
export { CreateSpecificationUseCase };

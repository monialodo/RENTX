import { CategoriesRepository } from "../../repositories/Implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoriesUseCase";

const categoryRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };

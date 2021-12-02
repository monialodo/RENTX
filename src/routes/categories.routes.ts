import { Router } from "express";
import multer, { Multer } from "multer";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (request, response) => 
  createCategoryController.handle(request, response)

);

categoriesRoutes.get("/", (request, response) =>
  listCategoryController.handle(request, response)
);

categoriesRoutes.post("/import", upload.single("file"), (request, response) =>
  importCategoryController.handle(request, response)
);

// eslint-disable-next-line import/prefer-default-export
export { categoriesRoutes };

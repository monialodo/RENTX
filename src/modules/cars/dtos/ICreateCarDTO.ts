import { Specification } from "../infra/typeorm/entities/Specifications";

interface ICreateCarDTO {
  brand: string;
  daily_rate: number;
  category_id: string;
  description: string;
  fine_amount: number;
  license_plate: string;
  name: string;
  specifications?: Specification[];
  id?: string;
}

export { ICreateCarDTO };

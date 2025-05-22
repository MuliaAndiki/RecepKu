import { NavbarConfig } from "@/app/types/app.config";
import {
  MenuSpesialTypes,
  TestiMoniTypes,
  ResepTypes,
  UserTypes,
  MyRecipesTypes,
} from "@/app/types/API";

export interface NavbarConfigProps {
  data: NavbarConfig;
}

export interface MenuSpesialTypesProps {
  data: MenuSpesialTypes;
}

export interface TestiMoniTypesProps {
  data: TestiMoniTypes;
}

export interface RekomendasiTypesProps {
  data: ResepTypes;
}

export interface ResepTerbatuTypesProps {
  data: ResepTypes;
}

export interface interfaceUserTypesProps {
  data: UserTypes;
}

export interface MyRecipesTypesProps {
  data: MyRecipesTypes;
}

export interface MenuSpesialTypes {
  image: any;
  title: string;
  shortDescription: string;
}

export interface TestiMoniTypes {
  foto: any;
  bintang: string;
  title: string;
  desc: string;
}

export interface ResepTypes {
  image: any;
  title: string;
  desc: string;
  star: string;
  href: string;
}

export interface UserTypes {
  token: string;
  user: {
    _id: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    profilePic: any;
    profilePicAlias: any;
    savedRecipes: string;
  };
}

export interface MyRecipesTypes {
  _id: string;
  title: string;
  shortDescription: string;
  thumbnail: any;
}

export interface ModalProps {
  title: string;
  icon: "success" | "error" | "warning" | "info" | "question";
  deskripsi: string;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  onClose?: () => void;
}

export interface FormLogin {
  login: string;
  password: string;
}

export interface FormRegister {
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormEditProfile {
  phoneNumber: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: File | null;
}

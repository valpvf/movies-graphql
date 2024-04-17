import { createContext } from "react";

export const anonimousUser = {
  name: "Anonimous",
};

export interface AuthInfo {
  user: {
    name: string;
  };
}

export const AuthContext = createContext<AuthInfo>({
  user: anonimousUser,
});

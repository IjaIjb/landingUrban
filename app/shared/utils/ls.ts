import SecureLS from "secure-ls";
// let ls = new SecureLS({ encodingType: "rc4", isCompression: true });

//@ts-ignore
let ls: any;
const init = () => {
  ls = new SecureLS({ encodingType: "rc4", isCompression: true });
};
if (global?.localStorage) init();

export const getStoredAuthToken = () => ls.get("urbanToken");
export const storeAuthToken = (token: string) => ls.set("urbanToken", token);

export const getStoredClientUser = () => {
  if (typeof window !== "undefined") {
    return ls.get("urbanClientUser");
  }
};
export const storeClientUser = (user: string) =>
  ls.set("urbanClientUser", user);

export const removeStoredAuthToken = () => {
  ls.remove("urbanToken");
  ls.remove("urbanClientUser");
};

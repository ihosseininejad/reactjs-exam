import CookieHandler from "../utils/CookieHandler";

const useToken = (): string | null => {
  return CookieHandler.get('token');
};

export default useToken;

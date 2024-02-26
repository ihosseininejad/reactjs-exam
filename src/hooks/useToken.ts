import cookieHandler from "../utils/cookieHandler";
import { Token } from "../types/hooks/token.types";

const useToken = (): Token => {
  return cookieHandler.get('token');
};

export default useToken;
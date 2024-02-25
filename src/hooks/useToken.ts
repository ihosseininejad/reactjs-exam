import cookieHandler from "../utils/cookieHandler";

type Token = string | null;

const useToken = (): Token => {
  return cookieHandler.get('token');
};

export default useToken;
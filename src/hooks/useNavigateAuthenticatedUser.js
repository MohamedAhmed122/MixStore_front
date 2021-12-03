import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const useNavigateAuthenticatedUser = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);
};

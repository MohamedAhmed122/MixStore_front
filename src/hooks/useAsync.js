import { useEffect, useState } from "react";

export const useAuth = (myFunction, param) => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const ApiCall = async () => {
    setIsLoading(true);
    try {
      const result = await myFunction(param);
      await setValue(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    ApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);

  return { isLoading, value, error };
};

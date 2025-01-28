import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CounterForRedirection = () => {
  const [contador, setContador] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    if (contador > 0) {
      const timer = setTimeout(() => setContador(contador - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate("/login");
    }
  }, [contador, navigate]);
  return (
    <p className="text-center">
      Se le redireccionará al inicio en <span>{contador}</span> segundos...
    </p>
  );
};

export default CounterForRedirection;

import { useNavigate } from "react-router-dom";
import { StyleDiv } from "./styles";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyleDiv>
        <h1 className="text-style-heading-heading-1-700">NotFound</h1>
        <button onClick={() => navigate("/")}>Faça login</button>
      </StyleDiv>
    </>
  );
};

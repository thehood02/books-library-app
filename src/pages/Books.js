import { useParams } from "react-router-dom";

function Books() {
  const { subject } = useParams();
  
  return <div>{subject}</div>;
}

export default Books;

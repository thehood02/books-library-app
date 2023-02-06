import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Books() {
  const { subject } = useParams();
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    // getBooks();
  }, []);

  const getBooks = async () => {
    const url = `https://openlibrary.org/subjects/${subject}.json?limit=10?offset=${counter}`;
    axios.get(url).then(res => console.log("respose", JSON.stringify(res))).catch(err => console.log("err", JSON.stringify(err.message)));
  }

  const data = [
    {
      name: "yos",
      age: 21,
      gender: "M",
    },
    {
      name: "yos1",
      age: 23,
      gender: "M",
    },
    {
      name: "yos2",
      age: 12,
      gender: "F",
    },
    {
      name: "yos3",
      age: 14,
      gender: "M",
    },
  ];
  
  return (
    <div>
      {subject}
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Books;

import { useState } from "react"


const Home = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const addToDo = () => {
    if (text.length < 4) {
      return alert("kamida 4 ta harf yozing");
    };

    array.push(text);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} className="border" type="text" />
      <button onClick={addToDo} className="text-white bg-blue-700 px-5 py-1 ">add</button>

      {
        array.map((soz, index) => (
          <li key={index}>
            <p>{soz}</p>
          </li>
        ))
      }

    </div>
  )
}

export default Home
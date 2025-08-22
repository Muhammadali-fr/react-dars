import { useSelector, useDispatch } from "react-redux";
import { ayirish, qoshish } from "../store/feature/countSlice";

const Home = () => {

  const value = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
      <p>counter: {value}</p>

      <button onClick={() => dispatch(ayirish())}>ayirish</button>
      <button onClick={() => dispatch(qoshish())} >qoshish</button>
    </div>
  )
}

export default Home
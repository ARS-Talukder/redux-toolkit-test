import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const count = state.counter.count;
    // console.log(count)
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>decrease</button>
            <h3>{count}</h3>
            <button onClick={() => dispatch(increment())}>increase</button>
        </div>
    );
};

export default Counter;
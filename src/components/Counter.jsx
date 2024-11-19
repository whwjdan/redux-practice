import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

function Counter() {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1>Redux 카운터</h1>
      <div className="counter">
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
}

export default Counter; 
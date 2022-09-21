import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSelect = (e) => {
    const id = e.target.value;
    const coin = coinList.filter((coin) => coin.id === id);
    setSelected(coin[0]);
  };

  // 컴포넌트 렌더링시 한번만 실행할 코드
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoinList(json);
        setLoading(false);
      });
  }, []);
  console.log(selected);
  return (
    <div>
      <h1>The Coins!</h1>
      {!loading && <h3>Total : {coinList.length}</h3>}
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          {coinList.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      $
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="USD"
      />{' '}
      is equal to
      <strong>
        {' '}
        {selected === '' ? value : value * (1 / selected.quotes.USD.price)}{' '}
        {selected && selected.symbol}
      </strong>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                const topTenArr = [];
                for (let i = 0; i < 10; i++) {
                    topTenArr.push(json[i]);
                }
                // console.log(topTenArr);
                setCoins(topTenArr);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Top10 Coins!</h2>
            {loading ? <strong>Loading...</strong> : null}
            <ul>
                {coins.map((coin) => (
                    <li key={coin.id}>
                        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}{' '}
                        USD
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CoinTracker;

import React, { useState, useEffect } from 'react';
import './Home.css';
import { Slider } from '../../components/index';
import Card from '../../components/Card-imag-text/Card';
const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters?limit=10').then(
      (res) => {
        res.json().then((data) => {
          setData(data);
        });
      }
    );
  }, []);
  return (
    <div>
      <Slider />
      <div>
        <h1 className="title">Top 10 characters</h1>
        {!data ? <h1 style={{ textAlign: 'center' }}>Loding...</h1> : ''}
        {data?.map((cast, key) => {
          return (
            <Card
              key={key}
              dir={key % 2 === 0 ? 'ltr' : 'rtl'}
              image={cast?.img}
              name={cast?.name}
              Brith={cast?.birthday}
              appearance={cast?.appearance.join(', ')}
              occupation={cast?.occupation.join(', ')}
              portrayed={cast?.portrayed}
              status={cast?.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

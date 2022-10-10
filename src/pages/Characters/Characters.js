import React, { useState, useEffect } from 'react';
import Card from '../../components/Card-characters/Card';
import './Characters.css';
const Characters = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters').then((res) => {
      res.json().then((data) => {
        setData(data);
      });
    });
  }, []);
  return (
    <div className="d-flex flex-wrap mt-5 ms-5">
      {!data ? <h1 style={{ textAlign: 'center' }}>Loding...</h1> : ''}
      {data?.map((cast, key) => {
        return (
          <Card
            key={key}
            image={cast?.img}
            name={cast?.name}
            brithday={cast?.birthday}
            appearance={cast?.appearance}
            status={cast?.status}
          />
        );
      })}
    </div>
  );
};

export default Characters;

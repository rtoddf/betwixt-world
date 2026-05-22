// import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import './styles/colors-and-type.scss';
import './styles/card.scss';

// interface Card {
//   slug: string;
//   name: string;
//   miniBio: string;
//   tag: string;
//   image: string;
// }

function Home() {
  // const [characters, setCharacters] = useState<Card[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await fetch('/data/characters.json');
  //       const data = await response.json();
  //       console.log('data: ', data);

  //       setCharacters(data.characters);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error loading data:', error);
  //       setLoading(false);
  //     }
  //   }
  //   getData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // } else {
  //   console.log('characters: ', characters);
  // }

  return (
    <>
      <p>
        <Link to={`/neighborhood`} className="">
          Go to neighborhoods
        </Link>
      </p>
    </>
  );
}

export default Home;

import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { db } from '../firebase';

const FirebasePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      const collectionName = collection(db, 'movies');
      /* const snapshot = await getDocs(collectionName);
      setMovies(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      ); */
      onSnapshot(collectionName, (snapshot) => {
        setMovies(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };

    getMovies();
  }, []);
  return (
    <div>
      {
        <Table striped="columns">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Genero</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td>{movie.id}</td>
                <td>{movie.name}</td>
                <td>{movie.genre}</td>
                <td>{movie.year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      }
    </div>
  );
};

export default FirebasePage;

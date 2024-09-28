import React, { useContext } from 'react';
import { StudentContext } from './StudentContext';

function FavouriteStudent() {
  const { favorites, removeFavorite } = useContext(StudentContext);

  return (
    <div class="favorite">
      <h1>Favorite Students</h1>
      {favorites.length === 0 ? (
        <p>No favorite students yet.</p>
      ) : (
        <ul>
          {favorites.map((student, index) => (
            <li key={index}>
              {student}
              <button class="btn2" onClick={() => removeFavorite(student)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavouriteStudent;

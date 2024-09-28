import React, { useContext } from 'react';
import { StudentContext } from './StudentContext';

function ListofStudent() {
  const { students, favorites, addFavorite } = useContext(StudentContext);

  return (
    <div class="list">
      <h1>Student List</h1>
      {students.length === 0 ? (
        <p>No more students available.</p>
      ) : (
        <ol>
          {students.map((student, index) => (
            <li key={index}>
              {student}
              <button class="btn1"
                onClick={() => addFavorite(student)}
                disabled={favorites.includes(student)}
              >
                {favorites.includes(student) ? 'Added to Favorites' : 'Add to Favorites'}
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default ListofStudent;

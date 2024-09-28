import React, { useContext } from 'react';
import { StudentContext } from './StudentContext';

function StudentList() {
  const { students, favorites, addFavorite } = useContext(StudentContext);

  return (
    <div>
      <h1>Student List</h1>
      {students.length === 0 ? (
        <p>No more students available.</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student}
              <button
                onClick={() => addFavorite(student)}
                disabled={favorites.includes(student)}
              >
                {favorites.includes(student) ? 'Added to Favorites' : 'Add to Favorites'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;

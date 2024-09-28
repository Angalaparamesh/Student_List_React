import { createContext, useState } from 'react';


export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {

  const [students, setStudents] = useState(['Naruto', 'Hinata', 'Sasuke', 'Itachi', 'Sakura', 'Minato']);

  const [favorites, setFavorites] = useState([]);

  const addFavorite = (student) => {
    setFavorites([...favorites, student]);
    setStudents(students.filter((s) => s !== student));
  };

  const removeFavorite = (student) => {
    setFavorites(favorites.filter((s) => s !== student));
    setStudents([...students, student]);
  };

  return (
    <StudentContext.Provider value={{ students, favorites, addFavorite, removeFavorite }}>
      {children}
    </StudentContext.Provider>
  );
};

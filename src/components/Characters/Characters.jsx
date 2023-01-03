import React, {
  useState,
  useContext,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { AppContext } from "../../context/AppContext";
import { Search } from "../Search/Search";
import "./Characters.css";
import { useCharacters } from "../../hooks/useCharacter";

const initialState = {
  favorites: [],
};

const API = "https://rickandmortyapi.com/api/character/";

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITE":
      return {
        favorites: [...action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const { mode } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const characters = useCharacters(API);

  const handleClick = (character) => {
    const verifyList = favorites.favorites.includes(character);
    if (!verifyList) {
      dispatch({ type: "ADD_TO_FAVORITE", payload: character });
    } else {
      const removedFromList = favorites.favorites.filter(
        (favorite) => favorite !== character
      );
      dispatch({ type: "REMOVE_FROM_FAVORITE", payload: removedFromList });
    }
  };

  /*   const handleSearch = () => {
    setSearch(searchInput.current.value);
  }; */

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <section className={`characters-sec ${mode ? "Dark" : "Light"}`}>
      <label className="favLabel">Lista de favoritos:</label>
      <div className={`Favorite-container ${mode ? "Dark" : "Light"}`}>
        {favorites.favorites.map((favorite) => (
          <div key={favorite} className="FavoriteItem">
            <li>{favorite}</li>
          </div>
        ))}
      </div>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="Characters">
        {filteredUsers.map((character) => (
          <div
            key={character.id}
            className={`Character-card ${mode ? "Dark" : "Light"}`}
          >
            <button
              type="button"
              className={`favCh ${
                favorites.favorites.includes(character.name) ? "Infav" : ""
              }`}
              onClick={() => handleClick(character.name)}
            >
              Fav
            </button>
            <img className="chimg" src={character.image} alt={character.name} />
            <div className="description">
              <h3 className="name">Name: {character.name}</h3>
              <h4 className="status">Status: {character.status}</h4>
              <h4 className="specie">Specie: {character.species}</h4>
              <div className={`gender ${character.gender}`}>
                <h4>Gender: {character.gender}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Characters };

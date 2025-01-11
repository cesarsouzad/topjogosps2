import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logops2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import GameCard from './components/gamecard';

type Game = {
  id: number;
  nome: string;
  ano: number;
  imagem: string;
};

function App() {
  const [games, setGames] = useState<Game[]>([]);  // Use o tipo Game aqui
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://ps2api-production.up.railway.app/api/jogos')
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error('Erro ao carregar dados:', error));
  }, []);

  const filteredGames = games.filter((game) =>
    game.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <header>
          <img src={logo} alt="Logo" className="logo" />
          <input
            type="text"
            className="search"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </header>
        <main>
          {filteredGames.map((game) => (  // O segundo parâmetro de map é o índice
            <GameCard key={game.id} game={game} index={game.id} />  // Passando index + 1
          ))}
        </main>
      </div>
    </>
  );
}

export default App;

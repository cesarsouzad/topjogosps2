interface GameCardProps {
    game: {
      id: number;
      nome: string;
      ano: number;
      imagem: string;
    };
    index: number;
  }
  
  const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
    return (
      <div className="game-card">
        <img src={game.imagem} alt={game.nome} />
        <br/>
        <span className="position">{index}° - Lugar</span>
        <h3>{game.nome}</h3>
        <p>Ano: {game.ano}</p>
      </div>
    );
  };
  
  export default GameCard;
  
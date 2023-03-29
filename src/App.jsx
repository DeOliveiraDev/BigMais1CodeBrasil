import logo from './assets/Mais1CodeLogo.svg'
import "./styles.css"

function App() {
  const participantes = [
    {
      id: 1,
      nome: "Eu",
      imagem: "https://github.com/DeOliveiraDev.png",
    },
    {
      id: 2,
      nome: "Eu de novo",
      imagem: "https://github.com/DeOliveiraDev.png",
    },
    {
      id: 3,
      nome: "Olha eu ai",
      imagem: "https://github.com/DeOliveiraDev.png",
    },
    {
      id: 4,
      nome: "Caraca, só dá eu",
      imagem: "https://github.com/DeOliveiraDev.png",
    },
  ];

  return (
    <div className="App">
      <header>
        <div>
          <img src={logo} />
          <h1>BIG MAIS1CODE BRASIL</h1>
        </div>
        <div className='container'>
          <div>
            <img className='imagemLogo' src={logo} />
          </div>
          <div className='container__participantes'>
            {
              participantes.map((participante) => {
                return (
                  <img key={participante.id} className="imagemParticipante" src={participante.imagem} />
                )
              })
            }
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;

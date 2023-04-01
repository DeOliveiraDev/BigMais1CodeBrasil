import logo from './assets/Mais1CodeLogo.svg'
import logoPretoBranco from './assets/Mais1CodeLogoPretoBranco.svg'
import { useState } from 'react'
import './styles.css'

function App() {
  const [avatarHover, setAvatarHover] = useState('')

  const participantes = [
    {
      id: 1,
      nome: 'Eu',
      imagem: 'https://github.com/DeOliveiraDev.png',
    },
    {
      id: 2,
      nome: 'Eu de novo',
      imagem: 'https://github.com/DeOliveiraDev.png',
    },
    {
      id: 3,
      nome: 'Olha eu ai',
      imagem: 'https://github.com/DeOliveiraDev.png',
    },
    {
      id: 4,
      nome: 'Caraca, só dá eu',
      imagem: 'https://github.com/DeOliveiraDev.png',
    },
  ]

  return (
    <div>
      <header>
        <div className="top">
          <img src={logoPretoBranco} />
          <h1>BIG MAIS1CODE BRASIL</h1>
        </div>
        <div className="bottom">
          {avatarHover ? (
            <p>{avatarHover}</p>
          ) : (
            <div>
              <img className="imagemLogo" src={logo} />
            </div>
          )}
          <div className="bottom__participantes">
            {participantes.map((participante) => {
              return (
                <img
                  key={participante.id}
                  onMouseEnter={() => setAvatarHover(participante.nome)}
                  onMouseLeave={() => setAvatarHover('')}
                  className="imagemParticipante"
                  src={participante.imagem}
                />
              )
            })}
          </div>
        </div>
      </header>
    </div>
  )
}

export default App

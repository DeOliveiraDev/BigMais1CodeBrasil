import logo from '../../assets/Mais1CodeLogo.svg'
import logoBlackAndWhite from '../../assets/Mais1CodeBlackWhiteLogo.svg'
import { useState } from 'react'
import styles from './styles.module.scss'

export const Header = () => {
  const [avatarHover, setAvatarHover] = useState('')

  const participants = [
    {
      id: 1,
      name: 'Vinícius',
      avatar: 'https://github.com/DeOliveiraDev.png',
    },
    {
      id: 2,
      name: 'Vinícius',
      avatar: 'https://github.com/DeOliveiraDev.png',
    },
    {
      id: 3,
      name: 'Allan',
      avatar: 'https://github.com/DeOliveiraDev.png',
    },
    {
      id: 4,
      name: 'Matheus',
      avatar: 'https://github.com/DeOliveiraDev.png',
    },
  ]

  return (
    <div>
      <header>
        <div className={styles.headerTopContainer}>
          <img
            className={styles.headerTopContainer__logo}
            src={logoBlackAndWhite}
          />
          <h1 className={styles.headerTopContainer__title}>
            BIG MAIS1CODE BRASIL
          </h1>
        </div>
        <div className={styles.headerBottomContainer}>
          {avatarHover ? (
            <p className={styles['headerBottomContainer--name']}>
              {avatarHover}
            </p>
          ) : (
            <div>
              <img src={logo} />
            </div>
          )}
          <div className={styles.headerBottomContainer__participants}>
            {participants.map((participant) => {
              return (
                <img
                  key={participant.id}
                  onMouseEnter={() =>
                    setAvatarHover(participant.name.toUpperCase())
                  }
                  onMouseLeave={() => setAvatarHover('')}
                  className={
                    styles['headerBottomContainer__participants--avatar']
                  }
                  src={participant.avatar}
                />
              )
            })}
          </div>
        </div>
      </header>
    </div>
  )
}

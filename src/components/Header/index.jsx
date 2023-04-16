import logo from '../../assets/Mais1CodeLogo.svg'
import logoBlackAndWhite from '../../assets/Mais1CodeBlackWhiteLogo.svg'
import { useState } from 'react'
import styles from './styles.module.scss'

export const Header = () => {
  const [avatarHover, setAvatarHover] = useState('')

  const participants = [
    {
      id: 1,
      name: 'Ana Santos',
      status: 'ATIVO',
      weekRole: null,
      avatar: 'https://github.com/anikape.png',
    },
    {
      id: 2,
      name: 'Vinícius',
      status: 'ATIVO',
      weekRole: 'Anjo',
      avatar: 'https://github.com/DeOliveiraDev.png',
    },
    {
      id: 3,
      name: 'Matheus',
      status: 'ATIVO',
      weekRole: 'Líder',
      avatar: 'https://github.com/matheusmessora.png',
    },
    {
      id: 4,
      name: 'Allan',
      status: null,
      weekRole: null,
      avatar: 'https://github.com/Allanpt.png',
    },
    {
      id: 5,
      name: 'Rauane',
      status: 'ATIVO',
      weekRole: null,
      avatar: 'https://github.com/lRauane.png',
    },
    {
      id: 6,
      name: 'João Viktor',
      status: 'ATIVO',
      weekRole: null,
      avatar: 'https://github.com/jjviktor.png',
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
                <div
                  className={
                    styles['headerBottomContainer__participants--align']
                  }
                >
                  <div
                    className={
                      participant.status === null &&
                      styles['headerBottomContainer__participants--removed']
                    }
                  >
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
                  </div>
                  <p
                    className={
                      styles['headerBottomContainer__participants--weekrole']
                    }
                  >
                    {participant?.weekRole}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </header>
    </div>
  )
}

import { UI_TEXTS } from '../data/constantes'

export const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <div className="logo">📚</div>
        <h1 className="app-title">{UI_TEXTS.APP_TITLE}</h1>
      </div>
      <div className="header-right">
        <button className="user-btn" aria-label="profile">👤</button>
      </div>
    </header>
  )
}

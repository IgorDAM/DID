
import { Header } from './components/Header'
import Stadistics from './components/Stadistics'
import { Student } from './components/Student'
import { db } from './data/db'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Stadistics />

        <section className="students-grid">
          {db.map((s) => (
            <Student key={s.id} student={s} />
          ))}
        </section>
      </main>
    </div>
  )
}

    


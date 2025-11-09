import { STATS_LABELS, UI_TEXTS } from '../data/constantes'

const statData = [
  { label: STATS_LABELS.TOTAL, value: 32, color: '' },
  { label: STATS_LABELS.PRESENT, value: 28, color: 'present' },
  { label: STATS_LABELS.ABSENT, value: 3, color: 'absent' },
  { label: STATS_LABELS.LATE, value: 1, color: 'late' },
]

export default function Stadistics() {
  return (
    <section className="stats-section">
      <div className="stats-cards">
        {statData.map((s) => (
          <div key={s.label} className={`stat-card ${s.color}`}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="controls-row">
        <div className="search-wrapper">
          <input className="search-input" placeholder={UI_TEXTS.SEARCH_PLACEHOLDER} />
        </div>
      </div>
    </section>
  )
}

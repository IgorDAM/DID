import { BUTTON_LABELS } from '../data/constantes'

export const Student = ({ student }) => {
    if (!student) return null

    const { image, name, email, attendance, id } = student

    const lastStatus = attendance?.[attendance.length - 1]?.status || 'present'

    return (
        <article className="student-card">
            <div className="student-card-row">
                <img src={image} alt={name} className="student-image" />
                <div className="student-meta">
                    <div className="student-name">{name}</div>
                    <div className="student-id">ID: {id}</div>
                </div>
                <div className={`status-badge ${lastStatus}`}>{lastStatus}</div>
            </div>

            <div className="student-actions">
                <button className="btn present">{BUTTON_LABELS.PRESENT}</button>
                <button className="btn absent">{BUTTON_LABELS.ABSENT}</button>
                <button className="btn late">{BUTTON_LABELS.LATE}</button>
            </div>
        </article>
    )
}
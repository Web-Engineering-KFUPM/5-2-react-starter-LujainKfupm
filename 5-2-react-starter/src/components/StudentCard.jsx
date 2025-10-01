function StudentCard(prop) {
    return (
        <div className="student-card">
            <h3>{prop.name}</h3>
            <p>ID: {prop.id}</p>
            <p>Department: {prop.department}</p>
        </div>
    );
}

export default StudentCard;

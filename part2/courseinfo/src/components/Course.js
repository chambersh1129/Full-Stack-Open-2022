
const Part = ({ part }) => {
    return (
        <>
            <p>{part.name} {part.exercises}</p>
        </>
    )
}

const SumOfExercises = ({ parts }) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <>
            <p><strong>total of {total} exercises</strong></p>
        </>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <h2>{course.name}</h2>
            {course.parts.map(part =>
                <Part key={part.id} part={part} />
            )}
            <SumOfExercises parts={course.parts} />
        </>
    )
}

export default Course
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
            <p>total of {total} exercises</p>
        </>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
            <SumOfExercises parts={parts} />
        </>
    )
}

export default Content
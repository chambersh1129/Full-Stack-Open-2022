const Part = ({ part }) => {
    return (
        <>
            <p>{part.name} {part.exercises}</p>
        </>
    )
}

const SumOfExercises = ({ parts }) => {
    let total = 0
    parts.forEach(part => {
        total += part.exercises
    })
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
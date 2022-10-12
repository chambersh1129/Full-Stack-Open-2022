
function Header(props) {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

function Part(props) {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  )
}

function Content(props) {
  const [part1, part2, part3] = props.course.parts

  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  )
}

function Total(props) {
  let exercise_count = 0
  props.course.parts.forEach(part => {
    exercise_count += part.exercises
  })

  return (
    <>
      <p>Number of exercises {exercise_count}</p>
    </>
  )
}

function App() {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
}

export default App;


function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
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
  const [part1, part2, part3] = props.parts

  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  )
}

function Total(props) {
  return (
    <>
      <p>Number of exercises {props.exercise_count}</p>
    </>
  )
}

function App() {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total exercise_count={part1.exercises + part2.exercises + part3.exercises} />
    </>
  );
}

export default App;

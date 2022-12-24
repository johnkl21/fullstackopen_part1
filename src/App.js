const Header = (props) => {
return(<div><h1>{props.name}</h1></div>)
}

const Content = (props) => {
  return(<div>
          <Part part={props.p1} number = {props.n1}/>
          <Part part={props.p2} number = {props.n2}/>
          <Part part={props.p3} number = {props.n3}/>
        </div>)
  }

const Total = (props) => {
  return(<div><p>Number of exercises {props.n1 + props.n2 + props.n3}</p></div>)
  } 

const Part = (props) => {
return(<div><p>{props.part} {props.number}</p></div>)
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content  p1 = {part1} n1={exercises1}
                p2 = {part2} n2={exercises2}
                p3 = {part3} n3={exercises3}/>
      <Total n1={exercises1} n2={exercises2} n3={exercises3}/>
    </div>
  )
}

export default App

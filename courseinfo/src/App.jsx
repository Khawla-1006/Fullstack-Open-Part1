const Header = (props) =>{
  console.log(props)
  return(
    <h1>{props.course}</h1>
  );
}

const Part = (props) =>{
  console.log(props)
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
}

const Content =(parts) =>{
  console.log(parts)
  return(
    <div>  
      <Part part= {parts.parts[0].name}  exercises = {parts.parts[0].exercises} />
      <Part part= {parts.parts[1].name}  exercises = {parts.parts[1].exercises} />
      <Part part= {parts.parts[2].name}  exercises = {parts.parts[2].exercises} />
   </div>
  );
}

const Total = (parts) =>{
  console.log(parts)
  return(
    <div>
      <p>
        Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}
      </p>
    </div>
  );
}

const App = () => {
  const course = 'Half stack application development'
  const parts = [{
    name: 'Fundamentals of React',
    exercises: 10 
  }, 
  {
    name:'Using props to pass data',
    exercises: 7
  },
  {
    name: 'state of a component',
    exercises: 14
  }]

  return(
    <div>
      <Header course = {course} />

      <Content 
      parts = {parts}
      />

      <Total 
      parts = {parts}
      />
      
    </div>
  )
}

export default App

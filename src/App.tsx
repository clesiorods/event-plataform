import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react"
import { client } from "./lib/apollo";


const GET_LESSIONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;


function App() {

  interface Lesson {
    id: string;
    title: string;
  }

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSIONS_QUERY);
  console.log(data);

  return (
    <div className="App">
      <h1 className="text-5xl font-bold text-violet-500 m-5" >
        Ola mundo
      </h1>

      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id} >{lesson.title}</li>
        })}

      </ul>

    </div>
  )
}

export default App

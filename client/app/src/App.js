import logo from './logo.svg';
import './App.css';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
// const list_map = (object_value)=>{
//   return (<ls>{`${object_value}`}</ls>)
// }

// const movie_titles=()=>{
//   let results=[];
//   for (let i=0;i<movies.length;i++){
//     let object_value = movies[i].title
//     console.log(movies[i].title)
//    results.map(list_map(object_value))
//   }
//   console.log(results)
//   return results
// };

function App() {
  return (
    <div >
      <header >

      </header>
      <main>
        <ul>
          <div>Movies</div>
          <ls>{movies[0].title}</ls>
          <ls>{movies[1].title}</ls>
          <ls>{movies[2].title}</ls>
          <ls>{movies[3].title}</ls>
          <ls>{movies[4].title}</ls>
        </ul>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;

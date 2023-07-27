import './assets/style/BlogCard.css'
import './App.css'
import NavBar from './Components/NavBar';
import BlogPostsContainer from './Components/BloggPostsContainer';


function App() {
  return (
    <div className="App">      
      <NavBar/>
      <div className='welcome'>
        <p>Welcome To the World of Joy!</p>
      </div> 
    <BlogPostsContainer/>

    </div>
  );
}

export default App;

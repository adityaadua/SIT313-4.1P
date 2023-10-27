import Header from './Header';
import ArticlesList from './Articles';
import CustomCardList from './Tutorials';
import './App.css';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <ArticlesList />
      <br />
      <CustomCardList />
      <br />
      <NewsLetter />
      <br />
      <Footer />
    </div>
  );
}

export default App;

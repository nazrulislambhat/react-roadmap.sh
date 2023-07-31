import './App.css';
import MyButton from './components/MyButton';

function App() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return (
    <div className="app">
      <h1 className="heading-1">Learning React</h1>
      <MyButton />
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;

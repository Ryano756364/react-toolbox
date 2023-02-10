import ButtonPage from './pages/ButtonPage';
import Accordion from './components/Accordion';

function App(){
  const items = [
    {
      id: 1,
      label: 'Drop down #1',
      content: 'Content #1'
    },
    {
      id: 2,
      label: 'Drop down #2',
      content: 'Content #2'
    },
    {
      id: 3,
      label: 'Drop down #3',
      content: 'Content #3'
    }
  ]

  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default App;

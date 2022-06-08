
import './App.css';
import {Pie} from 'react-chartjs-2';


const data={
  type: 'bar',
  label:['Google','Bing','Baidu','Otros'],
  datasets:[{
    data:[74.56,10.54,9.42,5.42],
    backgroundColor:['#FF0000','blue','green','#FF0000']
  }]
};
const opciones={
  responsive: true
}
function App() {
  return (
    <div className="App">
      <Pie data={data} options={opciones}/>
    </div>
  );
}

export default App;

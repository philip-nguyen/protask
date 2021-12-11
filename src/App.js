import './App.css';

import { taskData } from './assets/taskData';

import DraggableList from './components/list/DraggableList';
import Card from './components/card/Card';

function App() {
  return (
    <div>
      <h1 className="header">
        Protask Drag and Drop List
      </h1>
      <DraggableList 
        list={taskData}
        renderItemContent={(item) => LessonCard(item)}
      />
    </div>
  );
}

const LessonCard = item => <Card item={item}/>

export default App;

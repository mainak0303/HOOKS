//import logo from './logo.svg';
import './App.css';
//import Increment from './hooks/usestate/increment';
//import Colorpicker from './hooks/usestate/colorpicker';
//import Debounce from './hooks/usestate/search';
//import Useinput from './hooks/useReducer/useinput';
//import CounterReducer from './hooks/useReducer/CounterReducer';
//import Colorpickerreducer from './hooks/useReducer/colorpicker';
//import UserInput from './hooks/useReducer/UserInput';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './hooks/useParams/page1';
import Page2 from './hooks/useParams/page2';
import Parent from './hooks/useContext/parent';
import Child from './hooks/useContext/child';
import Page from './hooks/useContext/child2';
import Child3 from './hooks/useContext/child3';
import HelloJs from './hooks/parentProps/parent';
import Parent_Memo from './hooks/useMemo/parent';

function App() {
  return (
    <div className="App">
      {/*<Increment/>
      <Colorpicker/>
      <Debounce/>
      <CounterReducer/>
      <Useinput/>
      <Colorpickerreducer/>
      <UserInput/>*/}

      {/* <Route path='/' element={<Page1/>}/>
          <Route path='/page2/:id' element={<Page2/>}/> */}
    
      <Router> 
      <Parent>
        <Routes>
          

          <Route path='/' element={<Child />}></Route>
          <Route path='/child2' element={<Page />}></Route>
          <Route path='/child3' element={<Child3/>}></Route>
        </Routes>
      </Parent>
      </Router>

      {/* <HelloJs/> */}
      <Parent_Memo/>
    </div>
  );
}

export default App;

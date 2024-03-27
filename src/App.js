import './App.css';
import "./Abhi.jpg";

function MyComponent({name,number})
{
  return <div>{name}{number}</div>;
}

function App() {
  return <div>Hello Welcome to react
     <MyComponent name ={"Kommaraju"}/> 
     <MyComponent name = {"Hara Narayana"}/> 
  <MyComponent name={"Karthik"}/><MyComponent name = {"Sharma"}/>
  <MyComponent number={"Your ROll Number is : AP22110010405"}/>
  Today is an ousum day.</div>;
}

export default App;

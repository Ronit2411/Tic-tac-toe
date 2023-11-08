import Game from './Components/Game';
import Title from './Components/Title';

function App() {
  return (
    <div className=" w-screen h-screen bg-slate-600 flex flex-col items-center justify-evenly">
    <div>
    <Title/>

    </div>
    <div>

      <Game />
    </div>
    </div>
  );
}

export default App;

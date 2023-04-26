import './App.css';
import { UserProvider } from './component/UserContext';
import { MainPage } from './routing/MainPage';


function App() {
  const clearConsoleErrors = () => {
    console.clear();
    console.warn("LOG BORRADO:\n Para ver errores anteriores elimina clearConsoleErrors(); \n en App.js línea 10...");
  };
  clearConsoleErrors();
  return (
    <div className="App">
      <UserProvider>
        <MainPage />
      </UserProvider>
    </div>
  );
}

export default App;

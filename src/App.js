import Bill from './components/Bill';
import Edit from './components/Edit'

function App() {
  return (
    <div className="App max-w-7xl mx-auto p-10 space-y-6">
      <Edit />

      <div className="bill grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">     
        <Bill name="Netflix" status="1" />   
        <Bill name="Prime Video" status="0" />
        <Bill name="Disney+" status="0" />
        <Bill name="Hotstar" status="1" /> 
        <Bill name="Hydro" status="1" /> 
        <Bill name="Water" status="1" />   
        <Bill name="Prime Video" status="0" />
        <Bill name="Prime Video" status="0" />
        <Bill name="Netflix" status="1" /> 
        <Bill name="Netflix" status="1" /> 
        <Bill name="Netflix" status="1" />   
        <Bill name="Prime Video" status="0" />
        <Bill name="Prime Video" status="0" />
        <Bill name="Netflix" status="1" /> 
        <Bill name="Netflix" status="1" /> 
      </div>

    </div>
  );
}

export default App;

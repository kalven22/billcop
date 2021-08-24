import { useState } from 'react';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Bill from './components/Bill';
import Edit from './components/Edit';

Amplify.configure(config);

function App() {

  const [deleteMode, setDeleteMode] = useState(false);

  const toggleDeleteMode = () => {
    console.log('i am invoked');
    setDeleteMode(!deleteMode);
    console.log(deleteMode);
  }

  return (
    <div className="App max-w-7xl mx-auto p-10 space-y-6">
      <Edit deleteMode={deleteMode} toggleDeleteMode={toggleDeleteMode} />

      { deleteMode && <div className="text-center font-semibold lowercase text-xl font-sans text-purple-600">Tap to Remove</div>}

      <div className="bill grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">     
        <Bill name="Netflix" status="1" deleteMode={deleteMode} />   
        <Bill name="Prime Video" status="0" deleteMode={deleteMode} />
        <Bill name="Disney+" status="0" deleteMode={deleteMode} />
        <Bill name="Hotstar" status="1" deleteMode={deleteMode} /> 
        <Bill name="Hydro" status="1" deleteMode={deleteMode} /> 
        <Bill name="Water" status="1" deleteMode={deleteMode} />   
        <Bill name="Prime Video" status="0" deleteMode={deleteMode} />
        <Bill name="Prime Video" status="0" deleteMode={deleteMode} />
        <Bill name="Netflix" status="1" deleteMode={deleteMode} /> 
        <Bill name="Netflix" status="1" deleteMode={deleteMode} /> 
        <Bill name="Netflix" status="1" deleteMode={deleteMode} />   
        <Bill name="Prime Video" status="0" deleteMode={deleteMode} />
        <Bill name="Prime Video" status="0" deleteMode={deleteMode} />
        <Bill name="Netflix" status="1" deleteMode={deleteMode} /> 
        <Bill name="Netflix" status="1" deleteMode={deleteMode} /> 
      </div>

      <div className="max-w-sm mx-auto">
        <AmplifySignOut />
      </div>

    </div>
  );
}

export default withAuthenticator(App);

import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import FullName from './Component/Profile/FullName.js';
import Address from './Component/Profile/Address.js';
//App CSS File
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfilePhoto className="photo" />
      <FullName className="name" />
      < Address className="address"/>
    </div>
  );
}

export default App;

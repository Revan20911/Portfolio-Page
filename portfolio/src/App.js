
import Channels from './components/Channels';
import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';
import {useState} from 'react'
import './index.css';

function App() {

//   let currentChannel = localStorage.getItem('channel');

  const [channel, setChannel] = useState('Home');

  const [sidebarStatus, setSidebarStatus] = useState('inactive');

  return (
    <div className="flex">
      <SideBar sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/>
      <Channels channel={channel} setChannel={setChannel} sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/>
      <ContentContainer channel={channel}/>
    </div>
  );
}

export default App;

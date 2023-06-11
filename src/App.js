import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import Loginform from './components/LoginForm';




const App =() =>{
  if(!localStorage.getItem('username'))return<Loginform />

  return(
    <ChatEngine
      height="100vh"
      projectID="af26ccc1-9906-48c7-9120-c148ac67837b"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps}/>}
      //Event Hook Here 
      onConnect={(creds) => console.log(creds)}
      onNewMessage={(chatId, message) => console.log(chatId, message)}



    />
  );
} 


export default App;

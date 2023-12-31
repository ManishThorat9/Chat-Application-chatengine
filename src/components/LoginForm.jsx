import { useState } from 'react';
import axios from 'axios';

const LoginForm = () =>{
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const handleSubmit =async (e) =>{
        e.preventDefault();

        const authObject ={ 'Project-ID': "76d76f70-1a01-49f3-8f59-c3e00a1db703" , 'User-Name':username, 'User-Secret':password}

        try{
          // username | password => chatengine ->give message

          await axios.get('https://api.chatengine.io/chats',{headers:authObject })

          localStorage.setItem('username',username)
          localStorage.setItem('password',password)


          window.location.reload();
          // works out -> logged in

        } catch(error){
          //error -> try with new username...
          setError('Oops, incorrect credentails.')
        }

  }


  return(
    <div className="wrapper">
      <div className="form">
        <h1 className="title">
          chat Application
        </h1>
        <form onSubmit={handleSubmit}>
          <input  type="text" value={username} onChange={(e) =>setUsername(e.target.value) }className='input' placeholder="Username" required />
          <input  type="password" value={password} onChange={(e) =>setPassword(e.target.value) }className='input' placeholder="password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  )

}
export default LoginForm;

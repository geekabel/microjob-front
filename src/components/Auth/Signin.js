import axios from 'axios';
import React, {useState} from 'react';
//import { useCookies } from 'react-cookie';
//import  history from '../helpers/Utils';
function Signin() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        //const [setCookie] = useCookies(['name'])
        //const [state, setState] = useState('');

        async function handleLogin() {
            const loginInfo = {
                identifier: username,
                password: password
            }
       
             axios.post('https://microjobs-api.herokuapp.com/auth/local',
            loginInfo
            )
            .then(response => {
                // Handle success.
                this.setState({loginResponse :response.data})
                console.log('Well done!', response.data);
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
              })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
              });
            

            //setCookie(null, 'jwt', loginResponse.jwt , {
              // maxAge: 30 * 24 * 60 * 60,
               //path: '/',
           //})
            
            //history.push('/myaccount');
            
        }
    
        return (
           
            <form>
                <input type="email" onChange={e => setUsername(e.target.value) } value={username} /><br />
                <input type="password" onChange={e => setPassword(e.target.value) } value={password} /><br />
                <button type="button" onClick={() => handleLogin() }>Login</button>
            </form>
        )
    

}
export default Signin;


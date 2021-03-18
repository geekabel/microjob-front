import axios from 'axios';
import React, {useState} from 'react';
import {useHistory}  from "react-router-dom";
//import { useCookies } from 'react-cookie';
//import  history from '../helpers/Utils';
function Signin() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const history = useHistory();
        //const [setCookie] = useCookies(['name'])
        const [text, setText] = useState('');

        async function handleLogin() {

            const loginInfo = {
                identifier: username,
                password: password
            }
           
           await axios.post('https://microjobs-api.herokuapp.com/auth/local',
            loginInfo
            )
            .then(response => {
                // Handle success.
                //this.setState({loginResponse: response.data})               
                
              localStorage.setItem('jwt',response.data.jwt);
              localStorage.setItem('username',response.data.user.username);
              setText('You have been successfully logged in. You will be redirected in a few seconds...');
              setTimeout(() => history.push('/'), 5000);

                //affichage des informations
               /* console.log('Well done!', response.data);
                console.log('User profile', response.data.user.username);
                console.log('User token', response.data.jwt);*/
              })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
               // setText('An error occurred, please see the developer console.')
              });

        }
    
        return (
           
            <form>
                <p>{text}</p>
                <input type="email" onChange={e => setUsername(e.target.value) } value={username} /><br />
                <input type="password" onChange={e => setPassword(e.target.value) } value={password} /><br />
                <button type="button" onClick={() => handleLogin() }>Login</button>
            </form>
        )
    

}
export default Signin;


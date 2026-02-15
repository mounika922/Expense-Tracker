import { useState } from 'react';
import API from '../../utils/api';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
     try {
    const res = await API.post('/auth/register',{
      name,email,password
    });

    alert(res.data.message);

  } catch (err) {
    console.log(err);
    alert("Registration failed");
  }
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={e => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={submit}>
        Register
      </button>
    </div>
  );
}

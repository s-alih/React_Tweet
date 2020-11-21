import React,{useState} from 'react';
import Tweet from './Tweet';


function App(){
  const [users , setUsers ] = useState([
    {name:'Salih', message :'What about you friends'},
    {name:'Marshal', message : 'I missed you so much , can you ready to go for dinner'},
    {name:'Noori', message:'Yes It is true we are going to make billion dollar, it is so  exiting to hear that '}
        
  ])
  return(
    <div className='app'>
      {users.map(user => (
      <Tweet name={user.name} message={user.message} />
        ))}
    </div>
      
  );
}

export default App;
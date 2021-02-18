
import './App.css';
import React ,{Component}from 'react';
import Customer from './components/Customer';
const customers = [
  {
  'id':1,
  'image':'http://placeimg.com/64/64/1',
  'name':'홍길동',
  'birth':'990224',
  'gender':'남자',
  'job':'대학생'
  },
  {
    'id':2,
    'image':'http://placeimg.com/64/64/2',
    'name':'김지훈',
    'birth':'980414',
    'gender':'남자',
    'job':'대학생'
  }
]
class App extends Component{
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer 
                map={c.id} // map은 key가 꼭 있어야함. 
                id={c.id}
                image={c.image}
                name={c.name} 
                birth={c.birth}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
      
      
    );
      
    
  }

}
export default App;

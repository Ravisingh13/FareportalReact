import React, { useState } from 'react';

const emps = [
  { id: 1, 
    name: 'Vibhanshu', 
    age: 23,
    avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
    location:"Faridabad"},
  { id: 2,
    name: 'Ravi', 
    age: 23 , 
    avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
    location:"Delhi"},
  { id: 3, 
    name: 'Shreya',
     age: 22 ,
     avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8", 
     location:"Lucknow"},
  { id: 4,
    name: 'Sid',
    age: 32 , 
    avatar: "https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8",
    location:"Kolkata"},
];
export default function App() {
  
  const [name, setName] = useState('');
  const [foundEmps, setFoundEmps] = useState(emps);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = emps.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        
      });
      setFoundEmps(results);
    } else {
      setFoundEmps(emps);
     
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundEmps && foundEmps.length > 0 ? (
          foundEmps.map((emp) => (
            <div  >
          <div className="card" style={{width: "18rem", margin: "50px" } }  >
              <img src={emp.avatar} className="card-img-top" alt={emp.name} />
              <div className="card-body">
                  <h5 className="card-title">{emp.name}</h5>
                  <p className="card-text">{emp.id} <b></b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <input type="button" className="btn btn-primary" value="Go somewhere" />
              </div>
          </div>
        </div>

          ))
        ) : (
          <h1>Results Not Found!</h1>
        )}
      </div>
    </div>
  );
}

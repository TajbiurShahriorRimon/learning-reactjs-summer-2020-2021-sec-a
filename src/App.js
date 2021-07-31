import UserList from './components/UserList';
import {users} from './usersData';
import {useState} from 'react';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import User from "./components/User";
import UpdateUser from "./components/UpdateUser";

function App() {

    const [userlist, setUserList] = useState(users);
    const deleteuser = (id)=>{
        const list = userlist.filter((user)=>user.id !== id);
        setUserList(list);
    }

    const insertNewUser= (newUser)=>{
        //inserting new user into the array...
        setUserList([...userlist, newUser]);
    }

    /*const updateUser = (userForUpdate, ind) => {
        userlist[ind].id = userForUpdate.id;
        userlist[ind].name = userForUpdate.name;
        userlist[ind].dept = userForUpdate.dept;
    }*/

    return (

        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <h1>Welcome Home!</h1>
                </Route>
                <Route path='/userlist'>
                <div>
                    <UserList list={userlist} deleteCallback={deleteuser}/>
                </div>
                </Route>
                <Route path='/create'>
                  <div>
                      <CreateUser status='add' callback={insertNewUser} />
                  </div>
                </Route>
                <Route path='/edit/:id' children={<UpdateUser status='edit'  />}></Route>
                <Route path='*'>
                  404 not found
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

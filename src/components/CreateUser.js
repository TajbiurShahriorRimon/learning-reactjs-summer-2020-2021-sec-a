import { useParams } from "react-router-dom";
import app from '../App';
import {users} from "../usersData";
import {useState} from 'react';
import User from "./User";

const CreateUser = ({status, callback})=>{
    const {id:eid} = useParams();

    const [newUser, insertUser] = useState(users);


    const onKeyChange = (userElement)=>{
        var u_name = userElement.target.name;
        var userValue = userElement.target.value;

        var userDetails = {...newUser, [u_name] : userValue};
        insertUser(userDetails);
    }

    const addUser = (e) => {
        e.preventDefault();

        if(status == 'add'){
            alert("added");
            callback(newUser);

            /*var userObj = setNewUser({
                id: userElement.target.id.value,
                name: userElement.target.name.value,
                dept: userElement.target.dept.value,
            })*/
            /*var uId = userElement.target.id.value;
            var uName = userElement.target.name.value;
            var uDept = userElement.target.dept.value;*/

            //addUserList([...insertUser, list]);

            //var countUser = users.length;
            //alert(e.target.id.value);
        }
    }
    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form onSubmit={addUser}>
                Name: <input type='text' name='name' onChange={onKeyChange} /> <br/>
                ID: <input type='text' name='id' onChange={onKeyChange} /><br/>
                Dept: <input type='text' name='dept' onChange={onKeyChange} /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;
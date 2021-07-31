import { useParams } from "react-router-dom";
import app from '../App';
import {users} from "../usersData";
import {useState} from 'react';
import User from "./User";

const CreateUser = ({status, callback})=>{
    const {id:eid} = useParams();

    const [newUser, insertUser] = useState(users);

    const singleUserDetails = users.find((singleUser) => {
        return singleUser.id == eid;
    });

    /*if (singleUserDetails == null) {
        singleUserDetails.id = "";
        singleUserDetails.name = "";
        singleUserDetails.dept = "";
    }*/

    const [editUserDetails, userModify] = useState({
        /*id: singleUserDetails.id,
        name: singleUserDetails.name,
        dept: singleUserDetails.dept,*/
        id: "",
        name: "",
        dept: "",
    })
    
    const onKeyChange = (userElement)=>{
        var u_name = userElement.target.name;
        var userValue = userElement.target.value;

        var userDetails = {...newUser, [u_name] : userValue};
        insertUser(userDetails);
    }

    const addUser = (e) => {
        e.preventDefault();

        if(status === 'add'){
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

    const onKeyChangeForEdit = (event) => {
        var u_name = event.target.name;
        var userValue = event.target.value;

        var userDetails = {...editUserDetails, [u_name] : userValue};
        userModify(userDetails);
    }

    const editUser = (e) => {
        e.preventDefault();
        if(status !== 'add'){
            var userArrayIndex = users.findIndex((userObj => userObj.id == eid));

            newUser[userArrayIndex].name = editUserDetails.name;
            newUser[userArrayIndex].id = editUserDetails.id;
            newUser[userArrayIndex].dept = editUserDetails.dept;
            alert('User Updated Successfully');
        }
    }

    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form onSubmit={status === 'add'? addUser:editUser}>
                Name: <input type='text' name='name' onChange={status==='add'?onKeyChange:onKeyChangeForEdit} value={status!=='add'?editUserDetails.name:null} /> <br/> {/*value={status!=='add'?singleUserDetails.name:null}*/}
                ID: <input type='text' name='id' onChange={status==='add'?onKeyChange:onKeyChangeForEdit} value={status!=='add'?editUserDetails.id:null} /><br/>
                Dept: <input type='text' name='dept' onChange={status==='add'?onKeyChange:onKeyChangeForEdit} value={status!=='add'?editUserDetails.dept:null} /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;
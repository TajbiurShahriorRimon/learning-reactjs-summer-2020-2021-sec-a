import { useParams } from "react-router-dom";
import app from '../App';
import {users} from "../usersData";
import {useState} from 'react';
import User from "./User";

const UpdateUser = ({status, callback})=>{
    const {id:eid} = useParams();

    const [newUser, insertUser] = useState(users);

    const singleUserDetails = users.find((singleUser) => {
        return singleUser.id == eid;
    });

    const [editUserDetails, userModify] = useState({
        id: singleUserDetails.id,
        name: singleUserDetails.name,
        dept: singleUserDetails.dept,
    })

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
            <form onSubmit={editUser}>
                Name: <input type='text' name='name' onChange={onKeyChangeForEdit} value={status!=='add'?editUserDetails.name:null} /> <br/> {/*value={status!=='add'?singleUserDetails.name:null}*/}
                ID: <input type='text' name='id' onChange={onKeyChangeForEdit} value={status!=='add'?editUserDetails.id:null} /><br/>
                Dept: <input type='text' name='dept' onChange={onKeyChangeForEdit} value={status!=='add'?editUserDetails.dept:null} /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default UpdateUser;
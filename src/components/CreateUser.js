import { useParams } from "react-router";
import app from '../App';
import {users} from "../usersData";
import {useState} from 'react';

const CreateUser = ({status})=>{
    const {id:eid} = useParams();

    /*function onTodoChange(value)
    {
        this.state({
            name: ''
        })
        const handleNameChange = (e) => {
            this.setState({
                name: e.target.value
            })
        }
    }*/


    const [insertUser, addUserList] = useState(users);
    const addUser = (e) => {
        if(status == 'add'){
            //alert(e.target.name);
            alert("frg");
            //insertUser.push(e.target.name, e.target.id, e.target.dept);
        }
    }
    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form onSubmit={addUser}>
                Name: <input type='text' name='name' value="" /> <br/>
                ID: <input type='text' name='id' value="" /><br/>
                Dept: <input type='text' name='dept' value="" /><br/> {/*dpet*/}
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;
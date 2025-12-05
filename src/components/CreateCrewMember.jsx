// This component is responsible for creating a new crew member in the database

import { createElement } from 'react';
import { useState } from 'react';
import { supabase } from '../client';
function CreateCrewMember() {
    const [member, setMember] = useState({name: "", speed: "", color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target
        setMember( (prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    // Makes an async call to the database to create a new crew member with its information and then returns the database entry
    const createMember = async (event) => {
        event.preventDefault();
        await supabase
            .from('crew')
            .insert({name: member.name, speed: member.speed, color: member.color})
            .select();
        window.location="/";
    }
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br/>
                <input type="text" id="name" name="name" onChange={handleChange} /> <br />
                <br />

                <label htmlFor="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" onChange={handleChange} /> <br />
                <br />

                <label htmlFor="color">Color</label><br/>
                <input type="text" id="color" name="color" onChange={handleChange} /> <br />
                <br />
                <input type="submit" value="Submit" onClick={createMember}/>
            </form>
        </div>
    )

}



export default CreateCrewMember;
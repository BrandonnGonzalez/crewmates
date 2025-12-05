// This component is responsible for creating a new crew member in the database

import { useState } from 'react';
import { supabase } from '../client';
import classes from '../CreateCrewMember.module.css';

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
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h2>Create a New Crewmate</h2>
                <form className={classes.form}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name" className={classes.label}>Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="speed" className={classes.label}>Speed</label>
                        <input 
                            type="text" 
                            id="speed" 
                            name="speed" 
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <label htmlFor="color" className={classes.label}>Color</label>
                        <input 
                            type="text" 
                            id="color" 
                            name="color" 
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Submit" 
                        onClick={createMember}
                        className={classes.submitButton}
                    />
                </form>
            </div>
        </div>
    )
}

export default CreateCrewMember;
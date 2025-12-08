import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useParams, useNavigate } from 'react-router-dom';
import classes from '../CreateCrewMember.module.css';

function EditMember() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [member, setMember] = useState({ id: null, name: "", speed: "", color: "" });

    // Fetch the existing member data when component loads
    useEffect(() => {
        const fetchMember = async () => {
            const { data } = await supabase
                .from('crew')
                .select()
                .eq('id', id)
                .single();
            
            if (data) {
                setMember(data);
            }
        };
        fetchMember();
    }, [id]);

    const updateMember = async (event) => {
        event.preventDefault();
        await supabase
            .from('crew')
            .update({ name: member.name, speed: member.speed, color: member.color })
            .eq('id', id);
        navigate('/');
    };

    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMember((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    return (
        <div className={classes.container}>
            <div className={classes.formWrapper}>
                <h2>Edit Crewmate</h2>
                <form className={classes.form}>
                    <div className={classes.formGroup}>
                        <label htmlFor="name" className={classes.label}>Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={member.name}
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
                            value={member.speed}
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
                            value={member.color}
                            onChange={handleChange}
                            className={classes.input}
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Update" 
                        onClick={updateMember}
                        className={classes.submitButton}
                    />
                </form>
            </div>
        </div>
    );
}

export default EditMember;
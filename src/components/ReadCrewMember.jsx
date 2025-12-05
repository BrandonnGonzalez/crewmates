import { useEffect, useState } from 'react';
import { supabase } from '../client';

function ReadCrewMember() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMember = async () => {
            const {data} = await supabase
                .from('crew')
                .select()
                .order('created_at', { ascending: true });

            // set state of members to the new returned members in the data
            setMembers(data);
        };
        
        fetchMember();
    }, []); // Add empty dependency array so it only runs once
      

    return (
        <div style={{ marginLeft: '300px', padding: '2rem' }}>
            <h1>Crewmate Gallery</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {members && members.map((member) => (
                    <div key={member.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '1.5rem',
                        backgroundColor: 'black',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h3>{member.name}</h3>
                        <p><strong>Speed:</strong> {member.speed}</p>
                        <p><strong>Color:</strong> {member.color}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReadCrewMember;
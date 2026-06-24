import { Link } from 'react-router-dom'; 
const studentData = [  
    { id: 1, name: 'Likhi', course: 'BCA' },  
    { id: 2, name: 'Pravalli', course: 'BSc' },  
    { id: 3, name: 'Navadeep', course: 'MCA' }, 
]; 
export default function Students() {  
    return (    
      <div style={{ padding:'20px' }}>      
        <h2>Student List</h2>      
        {studentData.map((s) => (        
            <div key={s.id}>          
              <Link to={`/students/${s.id}`}>            
                {s.name} – {s.course}          
              </Link>        
            </div>      
        ))}    
    </div>  
  );
} 
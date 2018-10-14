import  React  from  'react';
import './DisplayCitation.css';

const  DisplayCitation = ({ citation }) => {
    return (
        <div  className="DisplayCitation">
            <img  src={citation.image}  alt="profil"  />
            <ul>
                <li>
                    Name : {citation.name} 
                </li>    
                <li>
                    Quote : {citation.quote} 
                </li>            
            </ul>
        </div>
    );
};

export  default  DisplayCitation;
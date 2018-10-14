import  React  from  'react';

const  GenerateCitation = ({ selectCitation }) => {
    return (
        <div  className="GenerateCitation">
        <button  onClick={selectCitation}>Other quote</button>
        </div>
    );
};

export  default  GenerateCitation;
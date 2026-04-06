import Table from "./Table";
import Form from "./Form";
import { useState } from "react";
import { useEffect } from "react";



const LinkContainer=()=>{

    const [formData, setForData] = useState([]);

    const fetchLinks = async () => {
        try {
            const response = await fetch('/links');
            console.log(response);
            let data = await response.json();
            console.log(data);            
            setForData(data); 
        } catch (error) {
            console.error(error);
        }        
    }
    useEffect(() => {
        fetchLinks()
    }, [])

    const postLink = async (data) =>{
        
        try{
            let response = await fetch('/new',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            console.log(response);
            let message = response.text();
            console.log(message);
            fetchLinks();
        }catch(error){
            console.log(error);
        }
    }     

    // Getting values from Form.jsx
    let formArr = (data) => {

        postLink(data);
    }
    // Remove a specific element from (formData)
    const removeButton = async (id) => {
        try{
            await fetch(`/remove/${id}`, {
                method:'DELETE'
            })
            fetchLinks();

        }catch(error){
            console.log(error);
        }
        
        
    }


    return (
        <div>
            
            <h1 className="text-center" >Favorite Links</h1>
           
            <p className="lead text-center text-muted">Add a new <label htmlFor="linkName"> <u>link name</u></label> and <label htmlFor="linkUrl"> <u>URL name </u></label> to your Table!</p>

            <Form linkData={formArr} ></Form>
           
            <div className="lead text-center text-muted">
                <h2>Your links!</h2>
            </div>
            <Table data={formData} remover={removeButton}></Table>
        </div>
    );
}

export default LinkContainer;
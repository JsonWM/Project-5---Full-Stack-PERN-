import { useState } from "react";

function Form(props) {

    let [linkName, setLname] = useState("");
    let [linkUrl, setLUrl] = useState("");

    // linkName value
    let handleLinkName = (event) => {
        setLname(event.target.value);
    }
    // linkUrl value
    let handleLinkUrl = (event) => {
        setLUrl(event.target.value);
    }
    // sending (linkName & linkUrl values) to LinkContainer
    let newSubmission = (event) => {
        event.preventDefault();
        // Condition - error case
        if(!linkName || !linkUrl){
            alert("(Link name) and (Link Url) are required");
        }else{
            props.linkData({ name:linkName, URL:linkUrl });
            setLname("");
            setLUrl("");
            event.target.reset();
        }
    }

    


    return (
        <div className="container mt-3" >
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 ">
                    <form onSubmit={newSubmission} className="p-3 ">
                        {/* linkName */}
                        <label htmlFor="linkName">Link name</label>
                        <br />
                        <input type="text" id="linkName" name="linkName" className="form-control mb-2" onChange={handleLinkName} />
                        <br />
                        {/* linkUrl */}
                        <label htmlFor="linkUrl">Link URL</label>
                        <br />
                        <input type="text" id="linkUrl" name="linkUrl" className="form-control mb-3" onChange={handleLinkUrl} />
                        <br />
                        {/* Submit button */}
                        
                        <div className="d-flex justify-content-center">
                            <input type="submit" value="Add Favorite Link" className="btn btn-primary w-75"></input>
                        </div>
                    </form>
                </div>

            </div>


        </div>
    );
}

export default Form;
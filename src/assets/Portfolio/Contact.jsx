import React from 'react';
function Contact(){
    return(<div className="contact">
        <h1>Contact <span>Me!</span></h1>
        <form action="POST">
            <div className="input-box">
                <div className="input-field">
                    <input type="text " placeholder="Full name" required />
                    <span className="focus"></span>
                </div>

                <div className="input-field">
                    <input type="text " placeholder="Email" required />
                    <span className="focus"></span>
                </div>
            </div>


            
            <div className="input-box">
                <div className="input-field">
                    <input type="number " placeholder="Mobil Number" required />
                    <span className="focus"></span>
                </div>

                <div className="input-field">
                    <input type="text " placeholder="Email Subject" required />
                    <span className="focus"></span>
                </div>
            </div>

                <div className="textarea-field">
                    <textarea name="" cols={30} rows={10}>

                         
                    </textarea>
                    <span className="focus"></span>
                </div>

                <div className='Button'>
            <button className='butn'>Submit</button>
          
            </div>
        </form>

    </div>)
}

export default Contact
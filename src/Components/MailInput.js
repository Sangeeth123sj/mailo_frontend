
import {useState} from 'react'
const MailInput = () => {
    const [rawMail,setMail] = useState("")
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const prompt = e.target.mail.value;
        console.log("prompt",prompt)
        setLoading(true);
        // sending request to the cohere API
        try {
            const res = await fetch('http://localhost:8000/generate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ prompt })
            });
            const data = await res.json();
            console.log(data)
            setResponse(data.message);
            setMail(data.message);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
      

    }

    

    return <div>
        <form onSubmit={handleSubmit}>
            <p>enter mail prompt to create your professional mail.</p>
            <br/>
            <textarea rows="15" cols="100" onChange={(e) => setMail(e.target.value)} name="mail"></textarea>
            <br/> <br/>
            <div  className="livebox">
            <p>{rawMail}</p>
            </div>
            <button className="btn btn-success"  disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                  Loading...
                </>
              ) : (
                "Submit"
              )}
            </button>
            {loading && <p>Creating the perfect email..</p>}
        </form>
    </div>
    }


export default MailInput;
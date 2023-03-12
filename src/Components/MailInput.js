import { useState, useEffect } from 'react'

const MailInput = ({ mailDescription }) => {
  const [rawMail, setMail] = useState(mailDescription || '')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const selectedTemplate = localStorage.getItem('selectedTemplate');
    if (selectedTemplate) {
      setMail(selectedTemplate);
      localStorage.removeItem('selectedTemplate'); // clear the stored template after using it
    }
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const prompt = e.target.mail.value
    setLoading(true)
    // sending request to the cohere API
    try {
      const res = await fetch('http://localhost:8000/generate_mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      console.log(data)
      setResponse(data)
      setMail(data.message)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (mailDescription) {
      setMail(mailDescription)
    }
  }, [mailDescription])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>enter mail desscription to create your professional mail.</p>
        <br />
        <textarea
          placeholder="example: Create a mail to the hr apply for leave from monday to wednesday."
          rows="5"
          cols="30"
          onChange={(e) => setMail(e.target.value)}
          name="mail"
          value={rawMail}
          required
        ></textarea>
        <br /> <br />
        <div className="livebox">
          <p>{rawMail}</p>
        </div>
        <button className="theme-button" disabled={loading}>
          {loading ? (
            <>
              <span
                className="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </>
          ) : (
            'Submit'
          )}
        </button>
        {loading && <p>Creating the perfect email..</p>}
      </form>
    </div>
  )
}

export default MailInput

const Templates = () => {
    return <div>
        <br/><br/>
        <h1>Templates</h1>
        <p>Make use of these easy to use, simple templates for your emails.
        </p>
        <div class="grid-container">
            <div class="grid-cell">
                <p className="p-with-linebreaks small-text left-text"><strong>Meeting Reminder</strong><br/>
                    <small >Subject: Reminder - Meeting Tomorrow at 10 AM<br/>

Dear [Name],<br/>

I hope this email finds you well.<br/> This is a friendly reminder that we have a meeting scheduled for tomorrow at 10 AM.<br/>

The meeting will take place in the conference room on the 3rd floor.<br/> I have attached the meeting agenda and minutes from our last meeting for your reference.<br/>

Please let me know if you have any questions or concerns before the meeting. I look forward to seeing you tomorrow.<br/>

Best regards,<br/>
[Your Name]</small>
<br/><br/>
<button className="theme-button" >
              Use
            </button>
                </p>
                </div>
            <div class="grid-cell"><p className="p-with-linebreaks small-text left-text"><strong>Meeting Reminder</strong><br/>
                    <small >Subject: Reminder - Meeting Tomorrow at 10 AM<br/>

Dear [Name],<br/>

I hope this email finds you well.<br/> This is a friendly reminder that we have a meeting scheduled for tomorrow at 10 AM.<br/>

The meeting will take place in the conference room on the 3rd floor.<br/> I have attached the meeting agenda and minutes from our last meeting for your reference.<br/>

Please let me know if you have any questions or concerns before the meeting. I look forward to seeing you tomorrow.<br/>

Best regards,<br/>
[Your Name]</small>
<br/><br/>
<button className="theme-button" >
              Use
            </button>
                </p></div>
            <div class="grid-cell"><p className="p-with-linebreaks small-text left-text"><strong>Meeting Reminder</strong><br/>
                    <small >Subject: Reminder - Meeting Tomorrow at 10 AM<br/>

Dear [Name],<br/>

I hope this email finds you well.<br/> This is a friendly reminder that we have a meeting scheduled for tomorrow at 10 AM.<br/>

The meeting will take place in the conference room on the 3rd floor.<br/> I have attached the meeting agenda and minutes from our last meeting for your reference.<br/>

Please let me know if you have any questions or concerns before the meeting. I look forward to seeing you tomorrow.<br/>

Best regards,<br/>
[Your Name]</small>
<br/><br/>
<button className="theme-button" >
              Use
            </button>
                </p></div>
        
        </div>
        <style>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 10px;
        //   border: 1px solid #ffffff;
          padding: 70px;
        }
        .grid-cell {
          border: 1px solid #ffffff;
          padding-top: 40px;
          padding-left: 40px;
          padding-right: 40px;
          padding-bottom: 10px;
        }
       
      `}</style>
    </div>
}

export default Templates;
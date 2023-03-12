// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Templates = () => {
    const navigate = useNavigate();
    return <div>
        <br/><br/>
        <h1>Templates</h1>
        <p>Make use of these easy to use, simple templates for your emails.
        </p>
        <div class="grid-container">
            <div class="grid-cell">
                <p id="template1"className="p-with-linebreaks small-text left-text"><strong>Meeting Reminder</strong><br/>
                    <small >Subject: Reminder - Meeting Tomorrow at 10 AM<br/>

Dear [Name],<br/>

I hope this email finds you well.<br/> This is a friendly reminder that we have a meeting scheduled for tomorrow at 10 AM.<br/>

The meeting will take place in the conference room on the 3rd floor.<br/> I have attached the meeting agenda and minutes from our last meeting for your reference.<br/>

Please let me know if you have any questions or concerns before the meeting. I look forward to seeing you tomorrow.<br/>

Best regards,<br/>
[Your Name]</small>
<br/><br/>
</p>
<button className="theme-button" onClick={() => {
    const template = document.getElementById('template1').textContent;
  localStorage.setItem('selectedTemplate', template);
  navigate('/'); // Navigate to the home page
}}>
  Use
</button>
               
                </div>
            <div class="grid-cell"><p id="template2" className="p-with-linebreaks small-text left-text"><strong>Meeting Reminder</strong><br/>
                    <small >Subject: Reminder - Meeting Tomorrow at 10 AM<br/>

Dear [Name],<br/>

I hope this email finds you well.<br/> This is a friendly reminder that we have a meeting scheduled for tomorrow at 10 AM.<br/>

The meeting will take place in the conference room on the 3rd floor.<br/> I have attached the meeting agenda and minutes from our last meeting for your reference.<br/>

Please let me know if you have any questions or concerns before the meeting. I look forward to seeing you tomorrow.<br/>

Best regards,<br/>
[Your Name]</small>
<br/><br/> </p>
<button className="theme-button" onClick={() => {
    const template = document.getElementById('template2').textContent;
  localStorage.setItem('selectedTemplate', template);
  navigate('/'); // Navigate to the home page
}}>
  Use
</button>
               </div>
            <div class="grid-cell"><p id="template3" className="p-with-linebreaks small-text left-text"><strong>Meeting Reminder</strong><br/>
                    <small >Subject: Reminder - Meeting Tomorrow at 10 AM<br/>

Dear [Name],<br/>

I hope this email finds you well.<br/> This is a friendly reminder that we have a meeting scheduled for tomorrow at 10 AM.<br/>

The meeting will take place in the conference room on the 3rd floor.<br/> I have attached the meeting agenda and minutes from our last meeting for your reference.<br/>

Please let me know if you have any questions or concerns before the meeting. I look forward to seeing you tomorrow.<br/>

Best regards,<br/>
[Your Name]</small>
<br/><br/></p>
<button className="theme-button" onClick={() => {
    const template = document.getElementById('template3').textContent;
  localStorage.setItem('selectedTemplate', template);
  navigate('/'); // Navigate to the home page
}}>
  Use
</button>
                </div>

            

                <div class="grid-cell"><p id="template4" className="p-with-linebreaks small-text left-text"><strong>Job Interview Invitation</strong><br/>
<small>Subject: Invitation to Job Interview - [Position]<br/><br/>

Dear [Name],<br/><br/>

I am pleased to inform you that your application for the position of [Position] has been successful, and we would like to invite you to an interview at our office.<br/><br/>

The interview will take place on [Date] at [Time] in our conference room located on the [Floor] floor. Please bring a copy of your resume and any other relevant documents.<br/><br/>

If you have any questions about the interview, please do not hesitate to contact us.<br/><br/>

We look forward to meeting you and discussing your application further.<br/><br/>

Best regards,<br/>
[Your Name]<br/>
[Company Name]</small><br/><br/>
</p>

<button className="theme-button" onClick={() => {
    const template = document.getElementById('template4').textContent;
  localStorage.setItem('selectedTemplate', template);
  navigate('/'); // Navigate to the home page
}}>
  Use
</button>
               </div>



               <div class="grid-cell"><p id="template5" className="p-with-linebreaks small-text left-text"><strong>Sales Promotion</strong><br/>
<small>Subject: [Discount] off everything in our store!<br/><br/>

Dear [Name],<br/><br/>

We wanted to let you know about our latest promotion - [Discount] off everything in our store! This is the perfect time to purchase that item you have been eyeing.<br/><br/>

Our store has a wide range of products that you may be interested in, and our knowledgeable staff will be happy to assist you with any questions you may have.<br/><br/>

The promotion is valid until [Date], so don't miss out on this fantastic opportunity.<br/><br/>

Thank you for your continued patronage, and we hope to see you soon!<br/><br/>

Best regards,<br/>
[Your Name]<br/>
[Company Name]</small><br/><br/>
</p>


<button className="theme-button" onClick={() => {
    const template = document.getElementById('template5').textContent;
  localStorage.setItem('selectedTemplate', template);
  navigate('/'); // Navigate to the home page
}}>
  Use
</button>
               </div>

               <div class="grid-cell"><p id="template6" className="p-with-linebreaks small-text left-text"><strong>Change of Business Hours</strong><br/>
<small>Subject: Important - Change of Business Hours<br/><br/>

Dear [Name],<br/><br/>

We wanted to inform you that starting from [Date], our business hours will change to the following:<br/><br/>

Monday to Friday: [New Hours]<br/>
Saturday: [New Hours]<br/>
Sunday: [New Hours]<br/><br/>

We apologize for any inconvenience this may cause, but we hope that these changes will allow us to better serve our customers.<br/><br/>

If you have any questions or concerns, please do not hesitate to contact us.<br/><br/>

Best regards,<br/>
[Your Name]<br/>
[Company Name]</small><br/><br/>
</p>

<button className="theme-button" onClick={() => {
    const template = document.getElementById('template6').textContent;
  localStorage.setItem('selectedTemplate', template);
  navigate('/'); // Navigate to the home page
}}>
  Use
</button>
               </div>


               <div class="grid-cell"><p id="template7" className="p-with-linebreaks small-text left-text"><strong>New Product Launch</strong><br/>
<small>Subject: Introducing Our Latest Product - [Product Name]<br/><br/>

Dear [Name],<br/><br/>

We are excited to announce the launch of our latest product - [Product Name]! This product is a game-changer and is sure to revolutionize the industry.<br/><br/>

[Product Description]<br/><br/>

We invite you to visit our store and try out our new product. Our knowledgeable staff will be happy to answer any questions you may have.<br/><br/>

Thank you for your continued patronage, and we hope to see you soon!<br/>
[Your Name]</small>
<br/><br/> </p>
<button className="theme-button" onClick={() => {
    const template = document.getElementById('template7').textContent;
  localStorage.setItem('selectedTemplate', template);
  navigate('/'); // Navigate to the home page
}}>
  Use
</button>
               </div>
        
        </div>
        <style>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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

import React from "react"
import Card from "react-bootstrap/Card"
import './Prettify.css'

function GitHubCard() {
  return (
      <div className="card">
        <Card >
        <Card.Img src='https://media.licdn.com/dms/image/C4D03AQEs8kxPBHd1dQ/profile-displayphoto-shrink_800_800/0/1583458223122?e=1698278400&v=beta&t=96rv0K43gkV746juFaHQcSCfxMFCCoBHOka0xlaNHN4' className="profilePic" style={{ height: "20em"}}/>
        <Card.Body className="funFont">
            <Card.Title>ACGreve</Card.Title>
            <Card.Text >
            Manufacturing Engineer with 2 years of experience in the automotive field. Currently broadening my vocational capacity through a software development bootcamp through NC State University, with the intent of delving into the field of software engineering.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard
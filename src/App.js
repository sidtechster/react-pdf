import React from 'react';
import jsPDF from 'jspdf';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  generatePDF = () => {
    var doc = new jsPDF('p','pt');

    doc.text(60, 60, 'This is the first title');

    doc.setFont('helvetica');
    doc.text(60, 100, 'This is the second title.');
    doc.text(60, 140, 'This is the third title.');

    doc.save('demo.pdf');
  }
  
  render() {
    return (
      <div>
        <button onClick={this.generatePDF} type="button">Download PDF</button>
      </div>
    );
  }
}

export default App;

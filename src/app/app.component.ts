import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public password = '';
  public lengthOfPass=0;

  public includeLetters: boolean = false;
  public includeNumbers: boolean = false;
  public includeSymbols: boolean = false;
  


  //get length from 
  getLength(value){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.lengthOfPass = parsedValue;

    }
  }
  // method for checkboxes
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols
  }

  submit(){
   console.log(`
      About to generate password with:
      Letters: ${this.includeLetters}
      Numbers: ${this.includeNumbers}
      Symbols: ${this.includeSymbols}
   `)
    const numbers ='1,2,3,4,5,6,7,8,9';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*~()';

    let validChars = '';
    
    this.includeLetters ? validChars += letters:0;
    this.includeNumbers ? validChars += numbers:0;
    this.includeSymbols ? validChars += symbols:0;


    let generatedPassword = '';

    for(let i = 0; i < this.lengthOfPass ; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    
    this.password = generatedPassword;
  }

 
}

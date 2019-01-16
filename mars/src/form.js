import React from 'react'
import list from './countries.js'
import './App.css'


class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      name:"",
      birthday:"",
      country:"",
      dietary:'',
      reason:'',
      incomplete:true,
      breathe: '',
      family: '',

    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }
  makeOption(){
    let thing = []
    for(let i = 0 ;i <list.length;i++){
       thing.push(<option key = {i} value={list[i]['name']} >{list[i]['code']}</option>)
    }return (thing)
  }
  preventDefault = (event) => {
    event.preventDefault()
  }
  changeState = () => {
    this.setState({
      incomplete : !this.state.incomplete
    })
  }
  reviewThing (){
    if (this.state.completed === true){
      return <div>banan</div>
    }
  }

  render(){
    const { name, birthday, dietary, reason,completed } = this.state;
    console.log(this.state)
    if(!completed){
    return(
      <>
        <div className = 'header'>
        <h1> Mission to Mars Registration Form</h1>
        </div>
        <div className = 'formDiv'>
          <form onChange={this.handleChange} onSubmit={this.preventDefault} >
            <label htmlFor = 'name'>What is your name?</label>
            <input  type = 'text' placeholder = 'name' name = 'name' value = {name}/>
            <br/>

            <label htmlFor="birthday">What is your birthday?</label>
            <input  type="date" name="birthday"  max="3000-12-31" value ={birthday}/>
            <br/>

            <label htmlFor="country">What is your country of origin? </label>

            <select name="country">
              <option disabled> countries</option>
              {this.makeOption()}
            </select>
            <br/>

            <label htmlFor="dietary">What is your dietary preference?</label>
            <select input  name = 'dietary' value = {dietary} >
            <option > Choose your dietary preference</option>
            <option value = 'omnivore'>omnivore</option>
            <option value = 'vegetarian'>vegetarian</option>
            <option value = 'vegan'>vegan</option>
            </select>
            <br/>

            <label htmlFor = 'reason'>Why do you want to be a Mars explorer?</label>
            <br/>
            <input className = 'reason' type = 'text' placeholder = 'I want to see explore because...' name = 'reason' value = {reason}/>
            <br/>

            <input type = 'submit' onClick= {this.changeState}  >
              
            </input>
          </form>

          </div>
        <br/>
        <div className = 'forms2Div'>
        <div className = 'radioDiv'>
          <label htmlFor='breathe'>Can you breathe underwater longer than 1 minute?</label>
          <br/>
          <div>
            <input type = 'radio' name = 'breathe' value = 'yes' />
            Yes
          </div>
          <div>
            <input type = 'radio' name = 'breathe' value = 'no' />
            No
          </div>
          <div>
            <input type = 'radio' name = 'breathe' value = "I don't know" />
            I don't know
          </div>
        </div>
        <div className = 'maritalDiv'>
          <label htmlFor='marital'>What is your marital status?</label>
            <br/>
            <div>
              <input type = 'radio' name = 'marital' value = 'Married' />
              Married
            </div>
            <div>
              <input type = 'radio' name = 'marital' value = 'Unmarried' />
              Unmarried
            </div>
        </div>
        <div className = 'situationDiv'>
          <label htmlFor='situation'>When you are in a stressful or difficult situation, how do you most frequently react?</label>
            <br/>
            <div>
              <input type = 'radio' name = 'situation' value = 'Determination' />
              Determination: I continue to confront the situation.
            </div>
            <div>
              <input type = 'radio' name = 'situation' value = 'Defeat' />
              Defeat: I stop confronting the situation.
            </div>
            <div>
              <input type = 'radio' name = 'situation' value = 'Anger' />
              Anger: I become upset at the situation.
            </div>
            <div>
              <input type = 'radio' name = 'situation' value = 'Resourcefulness' />
              Resourcefulness: I seek help to confront the situation.
            </div>
        </div>
        <div className = 'claustrophobic'>
          <label htmlFor='claustrophobicDiv'>Are you claustrophobic?</label>
            <br/>
            <div>
              <input type = 'radio' name = 'claustrophobic' value = 'Yes' />
              Yes
            </div>
            <div>
              <input type = 'radio' name = 'claustrophobic' value = 'No' />
              No
            </div>
            <div>
              <input type = 'radio' name = 'claustrophobic' value = "I don't know" />
              I don't know

            </div>
        </div>
          <div className = 'family'>
          </div>
        </div>
      </>
      )
    }else{
      return(
      <p>Thank you for your application</p>
    )}
  }
}



export default Form

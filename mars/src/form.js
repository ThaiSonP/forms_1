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
      completed:false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({[event.target.name]:event.target.value})
  }
  // makeOptions(list){
  //   for(let i = 0 ;i >list.length;i++){
  //     <option value = list[i]['name']>{list[i]['code']}</option>
  //   }
  // }
  completeForm(){
    this.setState({
      completed : true
    })
    debugger
  }

  render(){
    console.log(this.state)
    return(
      <>
        <h1> Mission to Mars Registration Form</h1>
        <div className = 'formDiv'>
          <form>
            <label htmlFor = 'name'>What is your name?</label>
            <input onChange={this.handleChange} type = 'text' placeholder = 'name' name = 'name' value = {this.state.name}/>
            <br/>

            <label htmlFor="birthday">What is your birthday?</label>
            <input onChange = {this.handleChange} type="date" name="birthday"  max="3000-12-31" value ={this.state.birthday}/>
            <br/>

            <label htmlFor="country">What is your country of origin? </label>
            <select input onChange={this.handleChange} name = 'country' value = {this.state.country} >
            <option >Choose your country</option>
            <option value = 'Afghanistan'>AF</option>
            </select>
            <br/>

            <label htmlFor="dietary">What is your dietary preference?</label>
            <select input onChange={this.handleChange} name = 'dietary' value = {this.state.dietary} >
            <option> Choose your dietary preference</option>
            <option value = 'omnivore'>omnivore</option>
            <option value = 'vegetarian'>vegetarian</option>
            <option value = 'vegan'>vegan</option>
            </select>
            <br/>

            <label htmlFor = 'reason'>Why do you want to be a Mars explorer?</label>
            <input className = 'reason' onChange={this.handleChange} type = 'text' placeholder = 'reason' name = 'reason' value = {this.state.reason}/>
            <br/>

            <button onClick= {this.completeForm}> Submit </button>
          </form>
        </div>
      </>
    )
  }
}

export default Form

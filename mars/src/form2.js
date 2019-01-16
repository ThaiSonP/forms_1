import React from "react";
import ReactDOM from "react-dom";


class Form2 extends React.Component {
  constructor() {
    super()
    this.state = {
      isHidden: true
    }
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    return (
      <>
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
  }
}
export default Form2

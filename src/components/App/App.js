import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSymptoms, updateFrequency, getDiagnoses } from '../../actions/index';
import { PersonIcon, AppHeader, QuestionContainer } from './SmallComponents';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Set state
    this.state = {
      chosenSymptomId: null,
      rightDisease: null,
      correctDisease: null
    }
  }

  componentDidMount() {
    this.props.dispatch(getSymptoms());
    this.props.dispatch(getDiagnoses());
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
    // this.props.dispatch(getDiagnoses());
  }

  scrollToBottom = () => {
    if (this.el) {
      this.el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  resetPage = (event) => {
    this.setState({ chosenSymptomId: null,
                    rightDisease: null,
                    correctDisease: null });
  }

  toggleSymptom = (event) => {
    if (this.state.chosenSymptomId == null) {
      var id = event.target.id;
      this.setState({ ['chosenSymptomId']: id });
    }
  };

  sortDiagnosisInSymptoms = (symptoms) => {
    function compare(a,b) {
      if (a.frequency > b.frequency)
        return -1;
      if (a.frequency < b.frequency)
        return 1;
      return 0;
    }

    for (var i = 0; i < symptoms.length; i++) {
      symptoms[i].diagnoses.sort(compare);
    }
    return symptoms;
  }

  isRightDisease = (event) => {
    if (this.state.rightDisease == null) {
      var id = event.target.id;
      this.setState({ rightDisease: id });
    }
  };

  isWrongDisease = (event) => {
    if (this.state.rightDisease == null) {
      var id = event.target.id;
      this.setState({ rightDisease: true, correctDisease: id });
      this.props.dispatch(updateFrequency(id))
      this.props.dispatch(getSymptoms());
    }
  }

  chooseDisease = (event) => {
    if (this.state.correctDisease == null) {
      var id = event.target.id;
      this.setState({ correctDisease: id });
      this.props.dispatch(updateFrequency(id))
      this.props.dispatch(getSymptoms());
    }
  };
  

  render() {
    const { error, loading, symptoms, diagnoses } = this.props;
    var sortedSymptoms = this.sortDiagnosisInSymptoms(symptoms);


    if (error) {
      return (
        <div>
          <AppHeader />
          <div className="error-text">Error! {error.message}</div>
        </div>
      );
    }

    if (loading) {
      return (
        <div>
          <AppHeader />
          <div className="error-text">Loading...</div>
        </div>
      );
    }

    return (
      <div className="app-container">
        <div className="reset-button" onClick={this.resetPage}>Start Over</div>
        <AppHeader />
        <QuestionContainer text="What are your symptoms?" />
        <div className="question-container">
          <div className="individual-question-container answer-container">
            <PersonIcon diasble={this.state.chosenSymptomId != null }/>
            {sortedSymptoms.map((item, index) => {
              return (
                <div className={"answer " + (this.state.chosenSymptomId != null ? "disabled" : "")}
                      onClick={this.toggleSymptom}
                      id={index}
                      key={item.id}>
                  {item.name}
                </div>
              )
            })}
          </div>
        </div>

        {this.state.chosenSymptomId != null &&
          <div>
            <QuestionContainer text={"Do you have " + sortedSymptoms[this.state.chosenSymptomId].diagnoses[0].name + "?"} />
            <div className="question-container">
              <div className="individual-question-container answer-container">
                <PersonIcon diasble={this.state.rightDisease != null }/>
                <div className={"answer " + (this.state.rightDisease != null ? "disabled" : "")}
                     onClick={this.isRightDisease}
                     id="false"
                     disease={null}>
                  No</div>
                <div className={"answer " + (this.state.rightDisease != null ? "disabled" : "")}
                     onClick={this.isWrongDisease}
                     id={sortedSymptoms[this.state.chosenSymptomId].diagnoses[0].id}>
                  Yes</div>
              </div>
            </div>
          </div>
        }

        {this.state.rightDisease === 'false' &&
          <div>
            <QuestionContainer text="That's the most common disease with that symptom, 
                  but these diseases are also very common. Please click on the disease that you do have." />
            <div className="question-container">
              <div className="individual-question-container answer-container">
                <PersonIcon />
                {sortedSymptoms[this.state.chosenSymptomId].diagnoses.map((item, index) => {
                  return (
                    <div className={"answer " + (this.state.correctDisease != null ? "disabled" : "")}
                         onClick={this.chooseDisease}
                         id={item.id}
                         key={item.id}>
                      {item.name}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        }

        {this.state.correctDisease != null &&
          <div>
            <QuestionContainer text="Great, glad we figured out what you have.  That much be a relief." />
            <QuestionContainer text={"There " + (diagnoses[0].frequency == 1 ? "has" : "have") + " been " + 
                                  diagnoses[0].frequency + " case" + (diagnoses[0].frequency == 1 ? "" : "s") + 
                                  " of " + diagnoses[0].name + " since this server was reset."}/>
            <div className="question-container">
              <div className="individual-question-container answer-container">
                <PersonIcon />
                <div className="answer" onClick={this.resetPage}>Let&#39;s do it again!</div>
              </div>
            </div>
          </div>
        }
       <div className="blank-padding" ref={el => { this.el = el; }} />
      </div>
    );
  }
}


//connects root reducer to props
function mapStateToProps(state) {
  return {
    symptoms: state.symptoms.symptoms,
    diagnoses: state.diagnoses.diagnoses,
    loading: state.symptoms.loading,
    error: state.symptoms.error
  }
}

export default connect(mapStateToProps)(App);





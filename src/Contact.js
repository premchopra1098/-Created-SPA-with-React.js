
import React, { Component } from "react";

class Selectseq extends Component {
  
    state = {
        cats: [{name:"", age:""}],
        owner: "",
        description: ""
      }
      
    
    handleChange = (e) => {
        if (["name", "age"].includes(e.target.className) ) {
          let cats = [...this.state.cats]
          cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
          this.setState({ cats }, () => console.log(this.state.cats))
        } else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
      }
      
    addCat = (e) => {
        this.setState((prevState) => ({
          cats: [...prevState.cats, {name:"", age:""}],
        }));
      }
    handleSubmit = (e) => { e.preventDefault() }
    render() {
      
        let {owner, description, cats} = this.state
        return (
            
            
      
  
          <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
            <input type="text" placeholder="Search.."></input><br/>
            <br/><button onClick={this.addCat}>Create new sequence</button><br/>
            <br/><label htmlFor="name">Sequence Name</label> 
            <input type="text" name="owner" id="owner" value={owner} /><br/>
            
            
            {
              cats.map((val, idx)=> {
                let catId = `cat-${idx}`, ageId = `age-${idx}`
                return (
                  <div key={idx}>
                    <br/><label htmlFor={catId}>{`InitialMssage ${idx + 1}`}</label>
                    <input
                      type="text"
                      name={catId}
                      data-id={idx}
                      id={catId}
                      value={cats[idx].name} 
                      className="name"
                    />
                    <label htmlFor={ageId}>{`FollowUp ${idx + 1}`}</label>
                    <input
                      type="text"
                      name={catId}
                      data-id={idx}
                      id={catId}
                      value={cats[idx].name} 
                      className="name"
                    /><br/>
                  </div>
                )
              })
            }
            <form> 
                      <input
                         type="checkbox"
                          name="A/B Testing"
                           id="A/B Testing"
                            onChange={this.verifiedChange} 
                            value={this.state.verified}
                             />
                          <label for="A/B Testing">
                          <small>A/B Testing</small>
                         </label>
            </form>
            <br/><input type="submit" value="Save & continue" /> 
            
          </form>
        )
        
      }
      
    }
 
export default Selectseq;
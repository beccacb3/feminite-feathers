import React, { Component } from 'react'

export class Navigation extends Component {
  render() {
    return (
      <div>
                <div className="navigation-flex" style={flexParent.div}>
                    <div className="left" style={flexChild.div}>
                        <p style={flexChild.p}>Logo Goes Here</p>
                    </div>
                    <div className="right" style={flexChild.div}>
                        <p style={flexChild.p}>Item1</p>
                        <p style={flexChild.p}>Item2</p>
                        <p style={flexChild.p}>Item3</p>
                    </div> 
                </div> 
      </div>
    )
  }
}

var flexChild = {
    div: {
        display: "flex",
    },
    p: {
        padding: "10px 20px"
    }
}

var flexParent = {
    div: {
        display: "flex",
        justifyContent: "space-between"
    }
}

export default Navigation
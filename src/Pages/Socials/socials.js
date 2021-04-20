import React, { Component } from 'react'

class Blog extends Component {
    render() {
        var verticals={
          display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }
        return (
          <div>
            <h1 style = {verticals}>Socials</h1>
          </div>
        )
      }
}

export default Blog

import React, {Component} from "react"

class HerbDatabase extends Component {
    constructor() {
        super()
        this.state = {
            herb: {}
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/herbs/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    herb: data
                })
            })

    }

    render() {
        return (
            <div>
                {this.state.herb.name}
            </div>
        )
    }
}

export default HerbDatabase;

import React, {Component} from "react"

class FetchWithDidMount extends Component {
    constructor() {
        super()
        this.state = {
            herb: {}
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/herbs")
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

export default FetchWithDidMount;

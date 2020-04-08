import React from "react"
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

class PersonCard extends React.Component{
    constructor(props){
        super();
        this.state = props.follower
    }
    render(){
        return(
            <Card style={{width:"460px"}}>
                <CardHeader>{this.state.name}</CardHeader>
                <CardBody><img src={this.state.avatar_url} /></CardBody>
                <CardFooter>
                <p>Username: {this.state.login}</p>
                <p>Location: {this.state.location} </p>
                </CardFooter>
                
            </Card>
        )
    }
}

export default PersonCard;
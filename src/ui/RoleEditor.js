import React from 'react';

import { Container, Col, Row } from 'reactstrap';
export default class RoleEditor extends React.Component {
    constructor (props) {
        super(props);
        this.updateName = this.updateName.bind(this);
        
    }

    updateName(name,dayIdx,volIdx) {
        let R = this.props.data;
        R.vols[dayIdx][volIdx] = name;
        this.props.update(R);
    }

    render() {
        return (
            <tr>
                <td>{this.props.data.role.name}</td>
                {[...Array(this.props.days)].map((u,i) => {
                    return (<td key={i}>
                        <Container><Col>
                            {[...Array(this.props.data.numbers[i])].map((U,I) => {
                                return (<Row key={I}>
                                    <input type="text" value={this.props.data.vols[i][I]} onChange={(e) => {this.updateName(e.target.value,i,I)}}></input>
                                </Row>)
                            })}
                            </Col></Container>
                    </td>)
                })}
            </tr>
        )
    }
    
}
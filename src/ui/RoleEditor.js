import React from 'react';

import { Container, Col, Row, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

import { FaUserPlus, FaUserMinus } from 'react-icons/fa';

export default class RoleEditor extends React.Component {
    constructor (props) {
        super(props);
        this.updateName = this.updateName.bind(this);
        this.addVol = this.addVol.bind(this);
        this.rmVol = this.rmVol.bind(this);
    }

    updateName(name,dayIdx,volIdx) {
        let R = this.props.data;
        R.vols[dayIdx][volIdx] = name;
        this.props.update(R);
    }

    rmVol(dayIdx, volIdx) {
        let R = this.props.data;
        if (R.vols[dayIdx].length > 1)
            R.vols[dayIdx].splice(volIdx,1);
        this.props.update(R);
    }

    addVol(dayIdx) {
        let R = this.props.data;
        R.vols[dayIdx].push("");
        this.props.update(R);
    }

    render() {
        return (
            <tr className="westli-row">
                <td>{this.props.data.role.name}</td>
                {[...Array(this.props.days)].map((u,i) => {
                    return (<td key={i}>
                        <Container><Col>
                            {this.props.data.vols[i].map((r,I) => {
                                return (<Row key={I}>
                                    <InputGroup>
                                    <Input type="text" value={r} onChange={(e) => {this.updateName(e.target.value,i,I)}}/>
                                    <InputGroupAddon addonType="append">                                    
                                        {I === 0 ? 
                                         <Button className="btn-sm" color="success" onClick={() => this.addVol(i)}><FaUserPlus/></Button> :
                                         <Button className="btn-sm"  color="danger" onClick={() => this.rmVol(i,I)}><FaUserMinus/></Button>}
                                         </InputGroupAddon>
                                         </InputGroup>
                                </Row>)
                            })}
                            
                            </Col></Container>
                    </td>)
                })}
            </tr>
        )
    }
    
}
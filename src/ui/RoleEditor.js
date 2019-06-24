import React from 'react';

import { Container, Col, Row, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';

import { FaUserPlus, FaUserMinus, FaClone } from 'react-icons/fa';

export default class RoleEditor extends React.PureComponent {
    constructor (props) {
        super(props);
        this.updateName = this.updateName.bind(this);
        this.addVol = this.addVol.bind(this);
        this.rmVol = this.rmVol.bind(this);
        this.copyVol = this.copyVol.bind(this);
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
    copyVol(dayIdx, volIdx) {
        let R = this.props.data;
        R.vols.forEach(day => {
            if (day.length-1 >= volIdx)
                day[volIdx] = R.vols[dayIdx][volIdx];
        });
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
                <td><strong>{this.props.data.role.name}</strong></td>
                {[...Array(this.props.days)].map((u,i) => {
                    return (<td key={i}>
                        <Container><Col>
                            {this.props.editable && <Row><Button className="btn-sm" color="success" onClick={() => this.addVol(i)}><FaUserPlus/></Button></Row>}
                            {this.props.data.vols[i].map((r,I) => {
                                return (<Row key={I}>
                                    <InputGroup>
                                        <Input type="text" value={r} onChange={(e) => {this.updateName(e.target.value,i,I)}}/>
                                        { this.props.editable && (<InputGroupAddon addonType="append">                                    
                                            <Button className="btn-sm"  color="danger" onClick={() => this.rmVol(i,I)}><FaUserMinus/></Button>
                                        </InputGroupAddon>) }
                                        { this.props.editable && (<InputGroupAddon addonType="append">                                    
                                            <Button className="btn-sm" color="info" onClick={() => this.copyVol(i,I)}><FaClone/></Button>
                                         </InputGroupAddon>) }
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
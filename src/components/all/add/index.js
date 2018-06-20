import React from "react";
import styled from 'styled-components';
import {
    Button,
    Input,
} from 'antd'

const AddComponentBody = styled.div`
`;

const AddTable = styled.table`
    display: inline-block;
    text-align: center;
`;

const AddButton = styled(Button)`
    margin-left: 20px;
`;

export default class AddComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            Chinese: 0,
            Math: 0,
            English: 0,
            Physical: 0,
        };

        this.onChange = this.onChange.bind(this);

        this.ChieseInput = React.createRef();
        this.MathInput = React.createRef();
        this.EnglishInput = React.createRef();
        this.PhysicalInput = React.createRef();
        this.nameInput = React.createRef();
    }


    onChange(e) {
        console.log('onChange');
        let ChineseScore = this.ChieseInput.input.value ? this.ChieseInput.input.value : 0;
        let MathScore = this.MathInput.input.value ? this.MathInput.input.value : 0;
        let EnglishScore = this.EnglishInput.input.value ? this.EnglishInput.input.value : 0;
        let PhysicalScore = this.PhysicalInput.input.value ? this.PhysicalInput.input.value : 0;
        let name = this.nameInput.input.value ? this.nameInput.input.value : 0;
        console.log(name);
        this.setState({
            name: name,
            Chinese: ChineseScore,
            Math: MathScore,
            English: EnglishScore,
            Physical: PhysicalScore,
        })
    }

    render() {
        let {onAdd} = this.props;
        let {name, Chinese, Math, English, Physical} = this.state;

        return (
            <AddComponentBody>
                <AddTable>
                    <tr>
                        <th>姓名</th>
                        <th>语文</th>
                        <th>数学</th>
                        <th>英语</th>
                        <th>物理</th>
                    </tr>
                    <tr>
                        <td><Input type="text" onChange={this.onChange}
                                   ref={node => {
                                       this.nameInput = node;
                                   }} value={name}/></td>
                        <td><Input type="number" min="0.0" step="1.0" max='100.0' onChange={this.onChange}
                                   ref={node => {
                                       this.ChieseInput = node
                                   }} value={Chinese}/></td>
                        <td><Input type="number" min="0.0" step="1.0" max='100.0' onChange={this.onChange}
                                   ref={node => {
                                       this.MathInput = node;
                                   }} value={Math}/></td>
                        <td><Input type="number" min="0.0" step="1" max='100.0' onChange={this.onChange}
                                   ref={node => {
                                       this.EnglishInput = node;
                                   }} value={English}/></td>
                        <td><Input type="number" min="0.0" step="1" max='100.0' onChange={this.onChange}
                                   ref={node => {
                                       this.PhysicalInput = node;
                                   }} value={Physical}/></td>
                        <td>
                            <AddButton onClick={() => {
                                onAdd && onAdd(name, Chinese, Math, English, Physical)
                            }}>添加</AddButton>
                        </td>
                    </tr>
                </AddTable>


            </AddComponentBody>
        )
    }
}
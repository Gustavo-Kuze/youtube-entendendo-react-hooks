import "./style.css";
import React, { Component } from "react";
import generateRandomColor from "../utils/randomColor";
import CheckboxesContainer from "./CheckboxesContainer";

export default class ClassComponent extends Component {
    state = {
        updateColor: true,
        updateComponentColor: true,
        backgroundColor: "#000000",
        componentBackgroundColor: "#000000"
    };

    componentDidMount() {
        document.title = "Testando React Hooks";
    }

    componentDidUpdate(_, prevState) {
        const {
            updateComponentColor,
            componentBackgroundColor,
            backgroundColor
        } = this.state;

        if (
            updateComponentColor &&
            prevState.updateComponentColor &&
            componentBackgroundColor !== backgroundColor
        )
            this.setState({
                componentBackgroundColor: this.state.backgroundColor
            });
    }

    handleClick = () => {
        if (this.state.updateColor)
            this.setState({ backgroundColor: generateRandomColor() });
    };

    setUpdateColor = checked => {
        this.setState({ updateColor: checked });
    };

    setUpdateComponentColor = checked => {
        this.setState({
            updateComponentColor: checked
        });
    };

    render() {
        return (
            <CheckboxesContainer
                backgroundColor={this.state.backgroundColor}
                componentBgColor={this.state.componentBackgroundColor}
                setUpdateColor={this.setUpdateColor}
                setUpdateComponentColor={this.setUpdateComponentColor}
                updateColor={this.state.updateColor}
                updateComponentColor={this.state.updateComponentColor}
            >
                <button onClick={this.handleClick} className="btn">
                    Alterar cor
                </button>
            </CheckboxesContainer>
        );
    }
}

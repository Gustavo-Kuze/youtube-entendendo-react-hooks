/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import React, { useState, useEffect } from "react";
import generateRandomColor from "../utils/randomColor";
import CheckboxesContainer from "./CheckboxesContainer";

export default () => {
    const [updateColor, setUpdateColor] = useState(true);
    const [updateComponentColor, setUpdateComponentColor] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState("#000");
    const [componentBackgroundColor, setComponentBackgroundColor] = useState(
        "#000"
    );

    useEffect(() => {
        document.title = "Testando React Hooks";
    }, []);

    useEffect(() => {
        if (
            updateComponentColor &&
            componentBackgroundColor !== backgroundColor
        )
            setComponentBackgroundColor(backgroundColor);
    }, [updateColor, backgroundColor]);

    const handleClick = () => {
        if (updateColor) setBackgroundColor(generateRandomColor());
    };

    return (
        <CheckboxesContainer
            backgroundColor={backgroundColor}
            componentBgColor={componentBackgroundColor}
            setUpdateColor={setUpdateColor}
            setUpdateComponentColor={setUpdateComponentColor}
            updateColor={updateColor}
            updateComponentColor={updateComponentColor}
        >
            <button onClick={handleClick} className="btn">
                Alterar cor
            </button>
        </CheckboxesContainer>
    );
};

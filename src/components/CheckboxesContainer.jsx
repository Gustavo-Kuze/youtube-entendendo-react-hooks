import React from "react";

const CheckboxesContainer = ({
    backgroundColor,
    componentBgColor,
    setUpdateColor,
    setUpdateComponentColor,
    updateColor,
    updateComponentColor,
    children
}) => {
    return (
        <div className="container" style={{ backgroundColor: backgroundColor }}>
            <div className="inputs">
                <div
                    style={{
                        background: componentBgColor
                    }}
                >
                    <input
                        id="chk-1"
                        className="chk"
                        type="checkbox"
                        checked={updateColor}
                        onChange={e => setUpdateColor(e.target.checked)}
                    />
                    <label htmlFor="chk-1">Atualizar cor de fundo</label>
                </div>
                <div
                    style={{
                        background: componentBgColor
                    }}
                >
                    <input
                        id="chk-2"
                        className="chk"
                        type="checkbox"
                        checked={updateComponentColor}
                        onChange={e =>
                            setUpdateComponentColor(e.target.checked)
                        }
                    />
                    <label htmlFor="chk-2">Atualizar cor dos componentes</label>
                </div>
            </div>
            {children}
        </div>
    );
};

export default CheckboxesContainer;

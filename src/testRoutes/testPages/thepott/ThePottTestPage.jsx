import { useState } from "react";
import CustomButton from "../../../package/customButton/CustomButton.jsx";
import Skeleton from "../../../package/skeleton/Skeleton.jsx";
import { Vstack } from "../../../package/layout/";
import Calendar from "../../../package/calendar/Calendar.jsx";

const ThePottTestPage = () => {
    const [isOn, setIsOn] = useState(false);
    const handleClick = () => {
        setIsOn(!isOn);
    };
    return (
        <div>
            <Vstack items="center">
                <span>something</span>
                <span>something</span>
                <span>something</span>
                <span>something</span>
                <span>something</span>
            </Vstack>
            <Vstack center>
                <Skeleton widthInPixel={600} heightInPixel={100} />
                <CustomButton>shape="RECTANGLE" - 기본값</CustomButton>
                <CustomButton isOn={isOn} shape="PILL" onClick={handleClick}>
                    shape="PILL"
                </CustomButton>
                <CustomButton isOn={isOn} color="MONO" onClick={handleClick}>
                    color="MONO" - 기본값
                </CustomButton>
                <CustomButton isOn={isOn} color="RED" onClick={handleClick}>
                    color="RED"
                </CustomButton>
                <CustomButton isOn={isOn} color="YELLOW" onClick={handleClick}>
                    color="YELLOW"
                </CustomButton>
                <CustomButton isOn={isOn} color="BLUE" onClick={handleClick}>
                    color="BLUE"
                </CustomButton>
                <Calendar />
                <Vstack items="center" style={{ alignItems: "center" }}>
                    <CustomButton style={{ width: "100px" }}>asdf</CustomButton>
                    <CustomButton style={{ width: "100px" }}>asdf</CustomButton>
                    <CustomButton style={{ width: "100px" }}>asdf</CustomButton>
                    <CustomButton style={{ width: "100px" }}>asdf</CustomButton>
                </Vstack>
            </Vstack>
        </div>
    );
};

export default ThePottTestPage;

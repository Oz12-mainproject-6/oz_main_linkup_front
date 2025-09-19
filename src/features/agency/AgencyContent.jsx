import { useEffect } from "react";
import Calendar from "../../package/calendar/Calendar";
import { CenterInRow, FullScreen, Hstack, Vstack } from "../../package/layout";
import RoundBox from "../../package/RoundBox";
import useLinkUpStore from "../../shared/store/store";
import AgencyModal from "./AgencyModal";
import AgencySidebar from "./AgencySidebar";
import { dummyEventArray } from "../../shared/store/dummyThepott";
import FlexOneContainer from "../../package/flexOneContainer/FlexOneContainer";

const AgencyContent = () => {
    const eventArray = useLinkUpStore((state) => state.eventArray);
    const setEventArray = useLinkUpStore((state) => state.setEventArray);

    useEffect(() => {
        setEventArray(dummyEventArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <AgencyModal />
            <Hstack gap="none" style={{ height: "100%", overflow: "hidden" }}>
                <AgencySidebar />
                <FlexOneContainer>
                    <Vstack items="center" style={{ height: "100%" }}>
                        <RoundBox
                            style={{
                                maxWidth: "1200px",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Calendar eventArray={eventArray} />
                        </RoundBox>
                    </Vstack>
                </FlexOneContainer>
            </Hstack>
        </>
    );
};

export default AgencyContent;

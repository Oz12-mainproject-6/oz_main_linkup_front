import CustomButton from "../../../package/customButton/CustomButton";
import { FullScreen, Vstack } from "../../../package/layout";
import RoundBox from "../../../package/RoundBox";
import {
    getFileThenDownload,
    getThenLog,
    postFileThenLog,
    postThenLog,
} from "../../../package/commonServices/fetchVariants";
import { useState } from "react";
import FlexOneContainer from "../../../package/flexOneContainer/FlexOneContainer";
import { axiosReturnsData } from "../../../shared/services/axiosInstance";

const RoundBoxGlobalShadow = ({ style, children, ...props }) => {
    return (
        <RoundBox style={{ boxShadow: "var(--drop-shadow-md)", ...style }} {...props}>
            {children}
        </RoundBox>
    );
};

const baseURL = import.meta.env.VITE_BASE_URL;
const getHome = () => getThenLog(`${baseURL}`);
const getHealth = () => getThenLog(`${baseURL}/health`);
const postEmailVerification = () =>
    postThenLog(`${baseURL}/api/auth/send-verification-email`, {
        email: "nusilite@gmail.com",
    });
const postFanLogin = (callback) =>
    postThenLog(
        `${baseURL}/api/auth/login`,
        {
            email: "fan_dummy_1@gmail.com",
            password: "fan123!",
        },
        callback,
    );
const postCompanyLogin = (callback) =>
    postThenLog(
        `${baseURL}/api/auth/login`,
        {
            email: "sm_dummy@company.com",
            password: "company123!",
        },
        callback,
    );

const postFanPost = () =>
    axiosReturnsData("POST", "/api/posts", {
        artist_id: 22,
        post_content: "가나다라",
    });

const ThePottApiTestPage = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null);

    const getMe = (callback) => getThenLog(`${baseURL}/api/auth/me`, callback, accessToken);
    const getFanSubscriptionWithName = (callback) =>
        getThenLog(`${baseURL}/api/subscriptions/?include_image=true`, callback, accessToken);
    const getFanSubscription = (callback) =>
        getThenLog(`${baseURL}/api/subscriptions`, callback, accessToken);
    const getEvents = (callback) =>
        getThenLog(
            // `${baseURL}/events/?artist_parent_group=1`,
            `${baseURL}/api/events/`,
            callback,
            accessToken,
        );
    const getEventsWithoutToken = (callback) =>
        getThenLog(`${baseURL}/api/events/?is_active=true`, callback);
    const getEventsWithIsActive = (callback) =>
        getThenLog(`${baseURL}/api/events/?is_active=true`, callback, accessToken);
    const getIdol = (callback) => getThenLog(`${baseURL}/api/idol`, callback, accessToken);
    const getIdolWithoutToken = (callback) => getThenLog(`${baseURL}/api/idol`, callback);

    const getCompaniesArtists = (callback) =>
        getThenLog(`${baseURL}/api/companies/artists`, callback, accessToken);
    const getCompaniesEvents = (callback) =>
        getThenLog(`${baseURL}/api/companies/events`, callback, accessToken);
    const getCompaniesEventsAespa = (callback) =>
        getThenLog(`${baseURL}/api/companies/events?artist_id=6`, callback, accessToken);
    const getBulkEvent = (callback) =>
        getFileThenDownload(`${baseURL}/api/events/file/download-all`, callback, accessToken);
    const getCompanyUploadTemplate = (callback) =>
        getFileThenDownload(
            `${baseURL}/api/companies/artists/upload-template`,
            callback,
            accessToken,
        );

    const callbackLogin = (data) => {
        setAccessToken(data.access_token);
    };

    const callbackMe = (data) => {
        setUser(data);
    };
    const callbackLog = (data) => {
        console.log({ data });
    };

    const handleBulkUpload = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        postFileThenLog(`${baseURL}/api/events/file/upload-all`, formData, accessToken);
    };

    return (
        <FullScreen center>
            <FlexOneContainer isYScrollable>
                <RoundBoxGlobalShadow padding="XL">
                    <Vstack gap="xl">
                        <RoundBoxGlobalShadow padding="XL">
                            개벌자 도구(Cmd + Alt + I) {"->"} Console 탭
                        </RoundBoxGlobalShadow>
                        <CustomButton onClick={getHome}>get home</CustomButton>
                        <CustomButton onClick={getHealth}>get health</CustomButton>
                        <CustomButton onClick={postEmailVerification}>
                            send email verification
                        </CustomButton>
                        <CustomButton onClick={() => postFanLogin(callbackLogin)}>
                            <p>fan login</p>
                            <p>{accessToken}</p>
                        </CustomButton>
                        <CustomButton onClick={() => postCompanyLogin(callbackLogin)}>
                            <p>company login</p>
                            <p>{accessToken}</p>
                        </CustomButton>
                        <CustomButton onClick={() => getMe(callbackMe)}>
                            <p>get me</p>
                            <p>{JSON.stringify(user)}</p>
                        </CustomButton>
                        <CustomButton onClick={() => getEvents(callbackLog)}>
                            <p>get events</p>
                        </CustomButton>
                        <CustomButton onClick={() => getIdolWithoutToken(callbackLog)}>
                            <p>get events without token</p>
                        </CustomButton>
                        <CustomButton onClick={() => getEventsWithIsActive(callbackLog)}>
                            <p>get events with is active</p>
                        </CustomButton>
                        <CustomButton onClick={() => getFanSubscriptionWithName(callbackLog)}>
                            <p>get subscription with name</p>
                        </CustomButton>
                        <CustomButton onClick={() => getFanSubscription(callbackLog)}>
                            <p>get subscription</p>
                        </CustomButton>
                        <CustomButton onClick={() => getIdol(callbackLog)}>
                            <p>get idol</p>
                        </CustomButton>
                        <CustomButton onClick={() => getIdolWithoutToken(callbackLog)}>
                            <p>get idol without token</p>
                        </CustomButton>
                        <CustomButton onClick={() => getCompaniesArtists(callbackLog)}>
                            <p>get companies artists</p>
                        </CustomButton>
                        <CustomButton onClick={() => getCompaniesEvents(callbackLog)}>
                            <p>get companies events</p>
                        </CustomButton>
                        <CustomButton onClick={() => getCompaniesEventsAespa(callbackLog)}>
                            <p>get companies events</p>
                        </CustomButton>
                        <CustomButton onClick={() => postFanPost(callbackLog)}>
                            <p>get posting</p>
                        </CustomButton>
                        <CustomButton onClick={() => getBulkEvent(callbackLog)}>
                            <p>get bulk event</p>
                        </CustomButton>
                        <RoundBox>
                            <form onSubmit={handleBulkUpload}>
                                <input type="file" name="file" />
                                <CustomButton>upload</CustomButton>
                            </form>
                        </RoundBox>
                        <CustomButton onClick={() => getCompanyUploadTemplate(callbackLog)}>
                            <p>get upload template </p>
                        </CustomButton>
                    </Vstack>
                </RoundBoxGlobalShadow>
            </FlexOneContainer>
        </FullScreen>
    );
};

export default ThePottApiTestPage;

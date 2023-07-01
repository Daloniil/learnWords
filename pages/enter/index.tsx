import {
    Box,
    Button,
    capitalize,
    CircularProgress,
    TextField,
    Typography,
} from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {Enter} from "../../Interfaces/EnterInterface";
import {lowerText} from "../../utils/lowerText";
import {useNotification} from "../../hooks/useNotification";
import {
    addStyle,
    modalContainerStyle,
    textFieldStyle,
    titleStyle,
    translateWord,
} from "../../Styles/EnterStyle";
import {
    LanguageKeys,
    LoginStatus,
    NotificationKeys,
    WordsParams,
} from "../../services/localKey";

import {useEffect, useState} from "react";
import {Translation} from "../../Interfaces/translation/translation";
import {TranslationService} from "../../services/translationService";
import {TranslationData} from "../../Interfaces/translation/translationResult";
import {useDebounce} from "../../hooks/useDebounce";
import {boxTranslationStyle, loadingStyle} from "../../Styles/TestStyle";
import {enterTranslation} from "../../translation/Enter";
import {useLanguage} from "../../hooks/useLanguage";
import {setTranslation} from "../../utils/setTranslation";
import {useLogin} from "../../hooks/useLogin";
import {useWords} from "../../hooks/useWords";
import {useAuth} from "../../hooks/useAuth";
import {MultiSelect} from "../../components/MultiSelect";
import {MetroLocator} from "../../components/MetroLocation";

const EnterPage = () => {
    const {addNotification} = useNotification();
    const {languageContext} = useLanguage();
    const {checkingLogin} = useLogin();
    const {addWord, speakWord} = useWords();

    const [translateEnglish, setTranslateEnglish] = useState("");
    const [translateRussian, setTranslateRussian] = useState("");

    const [items, setItems] = useState("");


    const debouncedSearchValueEnglish = useDebounce(translateEnglish, 1000);
    const debouncedSearchValueRussian = useDebounce(translateRussian, 1000);

    const [loading, setLoading] = useState(false);
    const [translatedText, setTranslatedText] = useState("" as string);
    const [statusLoading, setStatusLoadingUser] = useState(false);

    const [lang, setLang] = useState("en");

    const schema = yup.object().shape({
        englishWord: yup.string().required("This Field Cannot Be Empty"),
        russianWord: yup.string().required("This Field Cannot Be Empty"),
    });
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setValue,
    } = useForm<Enter>({resolver: yupResolver(schema)});

    const closeModalAdd = () => {
        reset({
            englishWord: "",
            russianWord: "",
        });
    };

    const addWords = async (data: Enter) => {
        setStatusLoadingUser(true);
        await addWord(data);
        setTranslateEnglish("");
        setTranslateRussian("");
        closeModalAdd();
        setStatusLoadingUser(false);
    };

    const handleTranslate = async (data: Translation[], lang: string) => {
        setLang(lang);
        const request = await TranslationService.translate(data, lang).catch(
            (e) => {
                addNotification(e.message, NotificationKeys.ERROR), setLoading(false);
            }
        );

        const result = request?.data.data.translatedText as string | undefined;
        setLoading(false);
        if (result) {
            setTranslatedText(result);
        }
    };

    const translation = (key: string) => {
        return setTranslation(key, enterTranslation, languageContext);
    };

    useEffect(() => {
        if (debouncedSearchValueEnglish) {
            handleTranslate([{Text: debouncedSearchValueEnglish}], "ru");
        }

    }, [debouncedSearchValueEnglish]);

    useEffect(() => {
        if (debouncedSearchValueRussian) {
            handleTranslate([{Text: debouncedSearchValueRussian}], "en");
        }
    }, [debouncedSearchValueRussian]);

    useEffect(() => {
        checkingLogin(LoginStatus.OTHER);
    }, []);

    // const testArr = [
    //     ["ISE"],
    //     ["ALL ACI",
    //         {text: "ACL_1", value: "ACL_1"},
    //         {text: "ACL_2", value: "ACL_2"}
    //     ],
    //     [
    //         "ALL Cloud",
    //         {text: "Cloud_1", value: "Cloud_1"},
    //         {text: "Cloud_2", value: "Cloud_2"}
    //     ],
    //     [
    //         "ALL TEST",
    //         {text: "TEST_1", value: "TEST_1"},
    //         {text: "TEST_2", value: "TEST_2"},
    //         {text: "TEST_3", value: "TEST_3"},
    //         {text: "TEST_4", value: "TEST_4"},
    //         {text: "TEST_5", value: "TEST_5"}
    //     ],
    //     [
    //         "ALL FIX",
    //         {text: "TEST_1", value: "FIX_1"},
    //         {text: "TEST_2", value: "FIX_2"},
    //     ]
    // ];

    const testArr = [
        {title: "ISE", value: 'ISE'},
        {
            title: "ALL ACI",
            value: 'ALL ACI',
            group: [{title: "ACL_1", value: 'ACL_1'}, {title: "ACL_2", value: 'ACL_2'}]
        },
        {
            title: "ALL Cloud",
            value: 'ALL Cloud',
            group: [{title: "Cloud_1", value: 'Cloud_1'}, {title: "Cloud_2", value: 'Cloud_2'}]
        },
        {
            title: "ALL TEST",
            value: 'ALL TEST',
            group: [{title: "Test_1", value: 'Test_1'}, {title: "Test_2", value: 'Test_2'}, {
                title: "Test_3",
                value: 'Test_3'
            }, {title: "Test_4", value: 'Test_4'}, {title: "Test_5", value: 'Test_5'}]
        }

    ]

    // useEffect(() => {
    //     console.log(items)
    // }, [items])
    //
    // const options = {
    //     multiple: false,
    //     onChange: setItems,
    //     search: true,
    //     required: true,
    // }
    //
    // const customItemTemplate = (item) => {
    //     return (
    //         <span>
    //         <img
    //             src='data:image/jpeg;base64,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'
    //             style={{width: '30px', height: '30px'}}/>
    //             {item.title}
    //     </span>
    //     );
    // };


    return (
        <>
            <Box sx={titleStyle}>{translation("enterWord")}</Box>
            <form
                onSubmit={handleSubmit((data) => {
                    data = lowerText(data);
                    addWords(data);
                })}
                style={{margin: "0 auto"}}
            >
                <Box sx={modalContainerStyle}>
                    <Box
                        sx={{
                            display: "flex",
                            margin: translateEnglish ? "0 0 0 -35px" : "",
                        }}
                    >
                        {translateEnglish ? (
                            <Typography
                                onClick={() => speakWord(translateEnglish)}
                                sx={{margin: "15px 0 0 0", transform: "translate(-10px, 0)"}}
                            >
                                <VolumeUpIcon fontSize="large" color="primary"/>
                            </Typography>
                        ) : (
                            ""
                        )}

                        <TextField
                            error={!!errors.englishWord}
                            sx={textFieldStyle}
                            label={translation("english")}
                            {...register("englishWord", {required: true})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            helperText={errors.englishWord?.message}
                            onChange={(e) => {
                                setLoading(true);
                                setTranslateEnglish(e.target.value);
                            }}
                        />
                    </Box>

                    <Box>
                        <TextField
                            error={!!errors.russianWord}
                            sx={textFieldStyle}
                            label={translation("russian")}
                            {...register("russianWord", {required: true})}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            helperText={errors.russianWord?.message}
                            onChange={(e) => {
                                setLoading(true);
                                setTranslateRussian(e.target.value);
                            }}
                        />
                    </Box>
                </Box>

                <Box sx={{display: "block", margin: "0 0 5px -15px"}}>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        {statusLoading ? (
                            <Box
                                sx={{
                                    transform: "translate(-50px, 20px)",
                                }}
                            >
                                <CircularProgress/>
                            </Box>
                        ) : (
                            ""
                        )}
                        <Box
                            style={{
                                margin: statusLoading ? "-5px 0 5px -25px" : "-5px 0 5px 15px",
                                display: translateEnglish || translateRussian ? "" : "none",
                            }}
                        >
                            <Typography sx={{textAlign: "center"}}>
                                {translation("translation")}
                            </Typography>

                            {loading ? (
                                <Box sx={loadingStyle}>
                                    <CircularProgress/>
                                </Box>
                            ) : (
                                <Box
                                    sx={boxTranslationStyle}
                                    onClick={() => {
                                        lang === "ru"
                                            ? setValue(
                                                "russianWord",
                                                translatedText
                                            )
                                            : setValue(
                                                "englishWord",
                                                translatedText
                                            );
                                    }}
                                >
                                    {lang === "ru" ? (
                                        <Typography lang={lang} sx={translateWord}>
                                            {translatedText[0]
                                                ? capitalize(translatedText)
                                                : ""}
                                        </Typography>
                                    ) : (
                                        <Typography lang="en" sx={translateWord}>
                                            {translatedText[0]
                                                ? capitalize(translatedText)
                                                : ""}
                                        </Typography>
                                    )}
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
                <Button variant="outlined" size="medium" type="submit" sx={addStyle}>
                    {translation("addButton")}
                </Button>
            </form>
            {/*<MultiSelect elements={testArr} lable={'TEST'} options={options} itemTemplate={customItemTemplate}/>*/}
        </>
    );
};

export default EnterPage;

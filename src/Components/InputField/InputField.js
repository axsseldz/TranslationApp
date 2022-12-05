import { useState, useEffect } from 'react';
import './InputField.css';




export default function InputField() {
    const [inputText, setInputText] = useState("")
    const [text, setText] = useState("")
    const [translatedText, setTranslatedText] = useState("")





    // /*
    //   This function is meant to detect the language source by making a API request.
    // */
    // async function detectLanguage(text) {
    //     try {
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 'X-RapidAPI-Key': '0957dcdbd7msh97780f7aefda0a1p1bd9f5jsna3d6d9aa7656',
    //                 'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
    //             },
    //             body: `{"text":"${text}"}`
    //         };
    //         const response = await fetch('https://translate-plus.p.rapidapi.com/language_detect', options);
    //         const result = await response.json();
    //         return result;

    //     } catch (error) {
    //         throw error;
    //     }
    // }


    // /*
    //   This function is meant to translate the text by making a API request.
    // */
    // async function translateText(lanSrc) {
    //     try {
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json',
    //                 'X-RapidAPI-Key': '0957dcdbd7msh97780f7aefda0a1p1bd9f5jsna3d6d9aa7656',
    //                 'X-RapidAPI-Host': 'translate-plus.p.rapidapi.com'
    //             },
    //             body: `{"text":"${text}","source":"${lanSrc.language_detection.language}","target":"es"}`
    //         };
    //         const response = await fetch('https://translate-plus.p.rapidapi.com/translate', options);
    //         const result = response.json();
    //         return result;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const detectLanguageResponse = await detectLanguage(text);
    //             const translateTextResponse = await translateText(detectLanguageResponse);
    //             setTranslatedText(translateTextResponse.translations.translation);
    //         } catch (error) {
    //             throw error;
    //         }
    //     })();
    // }, [text])





    const handleClick = () => {
        setText(inputText)
    }



    return (
        <div>
            <input
                placeholder='Enter a Text'
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleClick}>Translate</button>
            <input
                placeholder='Translated Text'
                value={translatedText}
                readOnly
            />
        </div>
    )
}
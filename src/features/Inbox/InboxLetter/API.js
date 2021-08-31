import axios from "axios";
import path from "../../../index";

export async function answerLetter(id, data) {
    axios.post(path + '/answerLetter', { id, data })
}
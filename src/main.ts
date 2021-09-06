import axio, { AxiosResponse } from 'axios';
import * as cheerio from 'cheerio';

const url_word_reference: string = 'https://www.wordreference.com/definicion/'

const word: string = 'maiz'


async function searchWord(word:string):Promise<string> {
    let response:AxiosResponse = await axio.get(`${url_word_reference}${word}`);
    if (response.status == 200) {
        let $ = cheerio.load(response.data);
        return $('#otherDicts').html();
    } else {
        return `<br><p>No hay resultado.<p/><br>`;
    }
}

async function main() {
    let definition:string = await searchWord(word);
    console.log(definition);
}

main();
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const cheerio = require("cheerio");
const url_word_reference = 'https://www.wordreference.com/definicion/';
const word = 'maiz';
function searchWord(word) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield axios_1.default.get(`${url_word_reference}${word}`);
        if (response.status == 200) {
            let $ = cheerio.load(response.data);
            return $('#otherDicts').html();
        }
        else {
            return `<br><p>No hay resultado.<p/><br>`;
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let definition = yield searchWord(word);
        console.log(definition);
    });
}
main();
//# sourceMappingURL=main.js.map
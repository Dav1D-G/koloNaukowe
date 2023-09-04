/* eslint-disable no-useless-escape */
import * as fs from 'fs';
import { dirname } from 'path';
import path = require('path');

export function convertHtmlFileToJson(): any {
  try {
    // Odczytaj zawartość pliku HTML

   // const htmlContent = fs.readFileSync('./Users/Dawid/Desktop/notifications-IP-150-setup-notifications-domain/notifications-IP-150-setup-notifications-domain/libs/common/src/register.html', 'utf-8');


   // console.log(htmlContent);
    // Umieść całą zawartość pliku HTML w polu "htmlContent" w obiekcie JSON
    // const jsonData = {
    //   htmlContent: htmlContent,
    // };

    // return jsonData;
  } catch (error) {
    console.error('Wystąpił błąd:', error);
    return null;
  }
}
const extractReactIntl = require('extract-react-intl');
const fs = require('fs-extra');

const pattern = 'src/**/*.messages.ts';
const locales = ['en', 'ru'];

const extractIntl = async () => {
  try {
    const intl = (await extractReactIntl(['en'], pattern)).en;
    locales.forEach(async locale => {
      if (fs.existsSync(`src/app/locales/${locale}.json`)) {
        const parsedLocaleFile = JSON.parse(
          await fs.readFile(`src/app/locales/${locale}.json`, 'utf8')
        );
        Object.keys(intl).forEach(key => {
          if (parsedLocaleFile[key] == undefined) {
            parsedLocaleFile[key] = intl[key] + '!TRANSLATE_ME!';
          }
        });
        fs.writeFile(
          `src/app/locales/${locale}.json`,
          JSON.stringify(parsedLocaleFile)
        );
      } else {
        fs.writeFile(
          `src/app/locales/${locale}.json`,
          JSON.stringify(intl, (key, value) => {
            if (typeof value === 'object') {
              return value;
            } else {
              return value + '!TRANSLATE_ME!';
            }
          })
        );
      }
    });
  } catch (err) {
    console.log(err);
  }
};

extractIntl();

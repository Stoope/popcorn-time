const electron = window.require('electron');
const fs = window.require('fs');
import path from 'path';

const parseDataFile = (filePath: string) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    return {};
  }
};

const configPath = path.join(
  (electron.app || electron.remote.app).getPath('userData'),
  'user-config.json'
);
const data = parseDataFile(configPath);

const electronStoreStorage = {
  getItem: async (key: string) => {
    return data[key];
  },
  setItem: async (key: string, item: string | number) => {
    data[key] = item;
    return fs.writeFileSync(configPath, JSON.stringify(data));
  },
  removeItem: async (key: string) => {
    delete data[key];
    return fs.writeFileSync(configPath, JSON.stringify(data));
  }
};

export default electronStoreStorage;

const electron = window.require('electron');
const fs = window.require('fs');
import path from 'path';

const configPath = (key: string) =>
  path.join(
    (electron.app || electron.remote.app).getPath('userData'),
    `${key}.json`
  );

const electronStoreStorage = {
  setItem: (key: string, item: string | number) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(configPath(key), item, 'utf8', (err: any, data: string) => {
        if (err != null) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  getItem: (key: string) => {
    return new Promise((resolve, reject) => {
      fs.readFile(configPath(key), 'utf8', (err: any, data: string) => {
        if (err != null) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  removeItem: (key: string) => {
    return new Promise((resolve, reject) => {
      fs.unlink(configPath(key), (err: any, data: string) => {
        if (err != null) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
};

export default electronStoreStorage;

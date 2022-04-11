import { ipcMain } from 'electron';
import getDebugInfo from './debug';
import {
  getGethLogs,
  getGethErrorLogs,
  getGethUsedDiskSpace,
  getSystemFreeDiskSpace,
} from './files';
import { getStatus, startGeth, stopGeth } from './geth';
import { store } from './store';
import logger from './logger';

// eslint-disable-next-line import/prefer-default-export
export const initialize = () => {
  ipcMain.handle('getGethStatus', getStatus);
  ipcMain.handle('startGeth', startGeth);
  ipcMain.handle('stopGeth', stopGeth);
  ipcMain.handle('getGethDiskUsed', getGethUsedDiskSpace);
  ipcMain.handle('getSystemFreeDiskSpace', getSystemFreeDiskSpace);
  ipcMain.handle('getDebugInfo', getDebugInfo);
  ipcMain.handle('getStoreValue', (_event, key: string) => {
    const value = store.get(key);
    logger.info('store.get(key, value)', key, value);
    return value;
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ipcMain.handle('setStoreValue', (_event, key: string, value: any) => {
    logger.info('store.set(key, value)', key, value);
    return store.set(key, value);
  });
  ipcMain.handle('getGethLogs', getGethLogs);
  ipcMain.handle('getGethErrorLogs', getGethErrorLogs);
};

/* eslint-disable */

import axios from 'axios';

class Bitrix24 {

  BATCH_CONST = 50;

  constructor({
    hook,
    store
  }) {
    this.hook = hook;
    this.store = store;
  }

  Get = async (method, arParams) => {
    try {
      const resp = await axios.post(`${this.hook}${method}`, {
        ...arParams
      });
      const data = resp.data;
      console.log('B24.Get', arParams, data);
      if (data.error) {
        return data.error;
      } else {
        return data.result;
      }
    } catch (err) {
      console.log({ err });
      // if (err?.response?.data?.error === 'expired_token') {
      //   this.handleRefreshToken(this.refresh_token);
      // }
      return err;
    }
  }

  BatchQuery = async (method, arParams, oneList = false) => {
    try {
      const resp = await axios.post(`${this.hook}${method}`, {
        ...arParams
      });
      const data = resp.data;
      if (data.error) {
        return data.error;
      } else {
        if (data.total > this.BATCH_CONST) {
          const res = await this.BatchPrepare(method, arParams, data.total, oneList);

          console.log({ res });
          if (oneList) {
            return this.BatchMap(res.result.result);
          }
          return res;
        } else {
          console.log('B24.BatchQuery', arParams, data);
          const keys = Object.keys(data.result);
          return data.result[keys[0]];
        }
      }
    } catch (err) {
      console.log('err', err?.response?.data?.error);
      // if (err?.response?.data?.error === 'expired_token') {
      //   this.handleRefreshToken(this.refresh_token);
      // }
      return err;
    }
  }

  BatchPrepare = async (method, arParams, total, oneList = false) => {

    let query = ``;
    if (arParams) {
      query = this.HTTPBuild(arParams)
    }

    let arCmd = {};
    let elements = {};
    for (let i = 0; i < total / this.BATCH_CONST; i++) {
      const sub_query = query ? `${query}&start=$next[elements_get_${i - 1}]` : `start=$next[elements_get_${i - 1}]`;
      const cmd = {
        [`elements_get_${i}`]: `${method}?${sub_query}`
      };
      arCmd = {
        ...arCmd,
        ...cmd
      }

      if ((i % this.BATCH_CONST === 0 && i !== 0) || (i === Math.floor(total / this.BATCH_CONST))) {
        const res = await this.BatchExecute(arCmd);
        const elements_result = elements.result ? { ...elements.result } : {};
        const elements_result_result = elements.result && elements.result.result ? { ...elements.result.result } : {};

        if (res.result) {
          elements = {
            ...res,
            result: {
              ...elements_result,
              result: {
                ...elements_result_result,
                ...res.result.result
              }
            },
          }
        }
        arCmd = {};
      }
    }
    return elements;
  }

  BatchExecute = async (arCmd, cb) => {
    try {
      const resp = await axios.post(`${this.hook}batch/`, {
        auth: this.access_token,
        cmd: arCmd
      });
      const data = resp.data;
      if (data.error) {
        return data.error;
      } else {
        console.log('B24.BatchExecute', arCmd, data);
        if (typeof cb === 'function')
          cb();
        return data;
      }
    } catch (err) {
      // if (err?.response?.data?.error === 'expired_token') {
      //   this.handleRefreshToken(this.refresh_token);
      // }
      return err;
    }
  }

  HTTPBuild = (obj, prefix) => {
    const params = [];

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        const paramKey = prefix ? `${prefix}[${key}]` : key;

        if (typeof value === 'object') {
          params.push(this.HTTPBuild(value, paramKey));
        } else {
          params.push(encodeURIComponent(paramKey) + '=' + encodeURIComponent(value));
        }
      }
    }

    return params.join('&');
  }

  /* Получаем заявки списком из batch'ей*/
  BatchMap = (result) => {
    console.log('map', result);
    const item_list = [];
    for (const k in result) {
      if (Object.hasOwnProperty.call(result, k)) {
        const keys = Object.keys(result[k]);
        const batch_result = result[k][keys[0]];
        batch_result.map(item => item_list.push(item))
      }
    }
    return item_list;
  }

  check = () => {
    console.log({
      app_domain: this.app_domain,
      access_token: this.access_token
    });
  }
}

export default Bitrix24;
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * Set item in local storage
   * @param key 
   * @param value 
   */
  set(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Get item from local storage
   * @param key
   * @returns
   */
  get<T>(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
    return null;
  }

  /**
   * Remove item from local storage
   * @param key
   * @returns
   */
  clearAll() {
    localStorage.clear();
  }
}

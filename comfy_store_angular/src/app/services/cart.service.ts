import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storeInitialized: boolean = false;

  constructor(private  storage: Storage) { 
    this.init();
  }

  async init() {
    if(!this.storeInitialized) {
      await this.storage.create();
      this.storeInitialized = true;
    }
  }

  async set(key: string, value: any): Promise<void> {
    await this.init();
    return this.storage.set(key, value);
  }

  async get(key: string): Promise<any> {
    await this.init();
    return this.storage.get(key);
  }

  async clear(): Promise<void> {
    await this.init();
    return this.storage.clear();
  }

}

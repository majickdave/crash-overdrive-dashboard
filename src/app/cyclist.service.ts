import { Injectable } from '@angular/core';

@Injectable()
export class CyclistService {

  private cyclists: any[] = [
    {
      name: "John Doe",
      lat: 32.7341479,
      lng: -117.144553,
    },
    {
      name: 'Lance Armstrong', 
      lat: 32.7292801,
      lng: -117.166117,
    }
    

  ]

  private collisions: any[] = [
    {
      name: 'Bob Belcher',
      lat: 32.7521797,
      lng: -117.1964147,
      note: 'Collision occurred - Emergency services have been alerted',
      phoneNumber: '(619) 123 4567'
    },
     {
      name: 'Linda Belcher',
      lat: 32.7292079,
      lng: -117.1679569,
      note: 'Collision occurred - Emergency services have been alerted',
      phoneNumber: '(619) 111 2222'
    }
  ]

  constructor() { }

  getCollisions() {
    return this.collisions;
  }

  getCyclists() {
    return this.cyclists;
  }

}

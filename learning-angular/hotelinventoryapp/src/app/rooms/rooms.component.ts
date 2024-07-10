import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {

  hotelName = "hilton hotel";

  numberofRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  title = 'Room List';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {  
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: "Air conditioner, Free wifi",
        price: 500,
        photos: "https://i.pinimg.com/736x/2e/3e/81/2e3e8112c88c7b2e177db1084cda07a6.jpg",
        checkinTime: new Date("11-Nov-2021"),
        checkoutTime: new Date("12-Nov-2021"),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Cozy Room',
        amenities: "Air conditioner, Free wifi",
        price: 1000,
        photos: "https://i.pinimg.com/736x/2e/3e/81/2e3e8112c88c7b2e177db1084cda07a6.jpg",
        checkinTime: new Date("11-Nov-2021"),
        checkoutTime: new Date("12-Nov-2021"),
        rating: 2.5
      },
      {
        roomNumber: 3,
        roomType: 'Nice looking Room',
        amenities: "Air conditioner, Free wifi",
        price: 15000,
        photos: "https://i.pinimg.com/736x/2e/3e/81/2e3e8112c88c7b2e177db1084cda07a6.jpg",
        checkinTime: new Date("11-Nov-2021"),
        checkoutTime: new Date("12-Nov-2021"),
        rating: 3.5
      }
    ]  
  }

  toggle () {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List"
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom () {
    const room: RoomList = {
      roomNumber: 5,
      roomType: 'Deluxe Room',
      amenities: "Air conditioner, Free wifi",
      price: 500,
      photos: "https://i.pinimg.com/736x/2e/3e/81/2e3e8112c88c7b2e177db1084cda07a6.jpg",
      checkinTime: new Date("11-Nov-2021"),
      checkoutTime: new Date("12-Nov-2021"),
      rating: 4.5,
    }

    this.roomList = [...this.roomList, room];
  }
}

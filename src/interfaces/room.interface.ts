export interface RoomCategory {
  category: string;
  hotelId: string;
  noOfRooms?: number;
}

export interface updateCategory {
  category: string;
  categoryId: string;
}

export interface Booking {
  hotelId: string;
  name: string;
  email: string;
  phone: number;
  roomCategory: string;
  roomNumber: number;
  checkInDate: Date;
  checkOutDate: Date;
}

export interface UpdateBooking {
  bookingId: string;
  name?: string;
  email?: string;
  phone?: number;
  roomCategory?: string;
  roomNumber?: number;
  checkInDate?: Date;
  checkOutDate?: Date;
}

export interface Room {
  number: number;
  category: string | undefined;
  hotelId: string;
  status: "AVAILABLE" | "BOOKED";
  bookedBy: string;
  dateBooked: string;
}

export interface AssignCategoryToRooms {
  category: string;
  roomNumbers: Array<number>;
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class TransportService {
  getTicket(): string {
    return 'Your ticket is valid';
  }

  register(userData: any) {
    return {
      message: 'User registered successfully',
      data: userData,
    };
  }
}
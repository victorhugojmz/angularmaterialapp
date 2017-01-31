import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }
  public getUsersData( ) {
      return [
            {'username': 'userno_10', 'profile_img': 'http://img.png' },
            {'username': 'userno_09', 'profile_img': 'http://img.png' },
            {'username': 'userno_08', 'profile_img': 'http://img.png' },
            {'username': 'userno_07', 'profile_img': 'http://img.png' },
            {'username': 'userno_06', 'profile_img': 'http://img.png' },
            {'username': 'userno_05', 'profile_img': 'http://img.png' },
            {'username': 'userno_04', 'profile_img': 'http://img.png' },
            {'username': 'userno_03', 'profile_img': 'http://img.png' },
            {'username': 'userno_02', 'profile_img': 'http://img.png' },
            {'username': 'userno_01', 'profile_img': 'http://img.png' }
        ]
     
   } 
}

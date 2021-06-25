import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  SERVER_URL_CREATE = 'https://lukw4l.de/teamEcho/createUser.php';
  SERVER_URL_GET = 'https://lukw4l.de/teamEcho/getUsers.php';

  constructor(private http: HttpClient) {}

  getAll() {
    console.log('get all');
    this.http
      .get<User[]>(this.SERVER_URL_GET)
      .subscribe(val => console.log(val));
    return this.http.get<User[]>(this.SERVER_URL_GET);
  }

  register(user: User) {
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.password);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('moderator', user.moderator ? '1' : '0');
    formData.append('token', user.token);

    this.http.post<any>(this.SERVER_URL_CREATE, formData).subscribe(
      res => {
        console.log('register');
        console.log(res);
        return this.getUser(res);
      },
      err => console.log(err)
    );

    return this.getAll()[0];
  }

  getUser(id: number) {
    this.getAll().subscribe(val => {
      console.log('get user');
      console.log(val);
      console.log(id);
      let myuser;
      for (var user of val) {
        if (user.id == id) myuser = user;
      }
      console.log(myuser);
      return myuser;
    });
  }
}

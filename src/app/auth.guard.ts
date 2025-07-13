import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const authGuard: CanActivateFn = async (route, state) => {
  const http = inject(HttpClient);
  const router = inject(Router);

  const token = localStorage.getItem('jwt');
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    await http.get('http://localhost:8000/admin/aggregate', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    }).toPromise();

    return true;
  } catch (err) {
    console.error('Not an admin:', err);
    router.navigate(['/login']);
    return false;
  }
};

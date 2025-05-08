import { CanActivateFn, Router } from '@angular/router';//If the user is logged in, then there will be a redirection to the pages.
import { inject } from '@angular/core';//For the guard to work anywhere in the application

export const authGuard: CanActivateFn = (route, state) => {//route: המידע על הנתיב שאליו רוצים לגשת.state: המצב של הניווט 
  const loggedIn = localStorage.getItem('loggedIn');
  if (loggedIn === 'true') {
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};

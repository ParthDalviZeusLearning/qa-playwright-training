
export type UserType = 'standard' | 'locked' | 'problem'; 
 
export interface UserCredentials { 
  username: string; 
  password: string; 
  type: UserType; 
  firstName?: string;
  lastName?: string;
  postalCode?: string
} 
 
export const users: UserCredentials[] = [ 
  { 
    username: 'standard_user', 
    password: 'secret_sauce', 
    type: 'standard',
    firstName:'Parth',
    lastName:'Dalvi',
    postalCode:'40001'
  }, 
  { 
    username: 'locked_out_user', 
    password: 'secret_sauce', 
    type: 'locked' 
  }, 
  { 
    username: 'problem_user', 
    password: 'secret_sauce', 
    type: 'problem' 
  } 
]; 



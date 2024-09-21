export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

let RoleDescription:Record<UserRole, string> = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
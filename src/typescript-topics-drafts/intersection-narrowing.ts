type HasEmail = {
  email: string;
};
type CanBeAdmin = {
  admin: boolean;
};
type User = HasEmail & CanBeAdmin;

// example
const amir: User = {
  email: 'amir@example.com',
  admin: true,
};
console.log(amir.email); // works

// missing the prop from CanBeAdmin type
const omar: User = {
  email: 'amir@example.com',
};
console.log(omar.email); // works

// NARROWING

// narrowing is the process of removing types from a union type
function extractEmail({ email }: HasEmail): string {
  return email;
}
extractEmail(amir);

// this will fail because the type of amir is User
function extractAdmin(hasEmail: HasEmail): boolean {
  return hasEmail.admin;
}
extractAdmin(amir);

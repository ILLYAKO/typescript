interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = "name";
key = "age";

//------------------
// new type
type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeyNoMeta1 = Exclude<keyof User, "_id " | "createdAt">; // 'name' | 'email'
type UserKeyNoMeta2 = Pick<User, "name" | "email">; // 'name' | 'email'

let u1: UserKeyNoMeta1 = "name";


enum Membership {
  Simple,
  Standard,
  Premium,
}
const membership = Membership.Standard; // return sequince number
const membershipReverse = Membership[2]; // return string by index

console.log("membership", membership);
console.log("membershipReverse", membershipReverse);

//---------------------------
// enum by key
enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM;
console.log("social", social);

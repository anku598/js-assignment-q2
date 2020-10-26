let notifications = [
  { message: 'Lorem', read: true },
  { message: 'Ipsum', read: true },
  { message: 'Dolor', read: true },
  { message: "Sit", read: false },
  { message: "Amet", read: true }
];

let allRead = true;

allRead = notifications.every(notification => {
  return notification.read == true
})


console.log(allRead);

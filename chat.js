if (Meteor.is_client) {
  var some_rooms = [
    {name: 'Meteor Talk', members: 3, last_activity: '1 minute ago'},
    {name: 'Meteor Development', members: 2, last_activity: '5 minutes ago'},
    {name: 'Meteor Core', members: 0, last_activity: '3 days ago'},
    {name: 'Business Line', members: 2, last_activity: '30 seconds ago'}
  ];

  Template.rooms.helpers({
    rooms: some_rooms
  });
}
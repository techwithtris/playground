new Vue ({
  el: '#events', //target elements in the div with id='events'
  data: {
    event:
    {
      name: '',
      description: '',
      date: '',
    },
    events: [
      {
        id: 1,
        name: 'AMG',
        description: 'Animangaki',
        date: '2017-05-6'
      },
      {
        id: 2,
        name: 'GOTG Vol 2',
        description: 'Guardians of the Galaxy Vol 2',
        date: '2017-05-7'
      },
      {
        id: 3,
        name: 'RAND',
        description: 'Some random event',
        date: '2017-05-11'
      },
    ]
  }, //data stuff
  mounted: function(){
  }, //function that runs once the doc is ready
  methods: {

    addEvent: function (){
      if(this.event.name){
        this.events.push(this.event);
        this.event = {name:'', description: '', date: ''};
      }
    },

    deleteEvent: function(event){
      if(confirm("Are you sure you want to delete?")) {
        this.events.splice(event, 1);
      }
    },
  } //custom methods we'll use in the app
});

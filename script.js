$(document).ready(function() {
    $('#calendar').evoCalendar({
        theme:"Orange Coral",
        calendarEvents: [
            {
              id: 'EVENT 1', 
              name: "New Year", 
              date: "January/1/2020", 
              description:"Wish You a Happy New Year",
              type: "holiday", 
              everyYear: true 
            },
            {
              name: "Vacation Leave",
              badge: "12/26 - 12/31", 
              date: ["December/26/2022", "December/31/2022"], 
              description: "Vacation leave for 6 days.", 
              type: "event",
              color: "grey",
              everyYear: true 
            },
            {
                id: 'EVENT 2', 
                name: "Itz Aszad Birthday", 
                date: "December/9/2020", 
                description:"Happy Birthday",
                type: "Fully Enjoy", 
                everyYear: true 
              },
          ]
       
        
    })
})
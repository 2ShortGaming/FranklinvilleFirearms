
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,listYear'
        },

        displayEventTime: false, // don't show the time column in list view

        // THIS KEY WON'T WORK IN PRODUCTION!!!
        // To make your own Google API key, follow the directions here:
        // http://fullcalendar.io/docs/google_calendar/
        googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',

        // US Holidays
        events: 'en.usa#holiday@group.v.calendar.google.com',

        eventClick: function (arg) {
            // opens events in a popup window
            window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');

            arg.jsEvent.preventDefault() // don't navigate in main tab
        },

        loading: function (bool) {
            document.getElementById('loading').style.display =
                bool ? 'block' : 'none';
        },

        navLinks: true, // can click day/week names to navigate views
        editable: true,
        selectable: true,
        nowIndicator: true,
        dayMaxEvents: true, // allow "more" link when too many events
        // showNonCurrentDates: false,

        events: [
            {
                title: '8am-5pm',
                start: '2021-01-03',
            },
            {
                title: 'Concealed Carry Class',
                start: '2021-01-03',
            },

            {
                title: '8am-5pm',
                start: '2021-01-16',
            },
            {
                title: 'Concealed Carry Class',
                start: '2021-01-16',

            },
            {
                title: '8am-5pm',
                start: '2021-01-31',
            },
            {
                title: 'Concealed Carry Class',
                start: '2021-01-31',

            },
            {
                title: '8am-5pm',
                start: '2021-02-13',
            },
            {
                title: 'Concealed Carry Class',
                start: '2021-02-13',

            },



        ]

    });

    calendar.render();
});


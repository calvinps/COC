//javascript function that loads the text for the "Updates" column on each page
function updates() {
    var html = '';
    html += '<h2>Updates</h2>\n\
		  <p>Check out our new <a href="events.html">Events</a> tab!</p>\n\
          <h3>Upcoming events</h3>\n\
          <dl>\n\
            <dt>&nbsp;</dt>\n\
            <dt> Fall 2014<br />\n\
            </dt>\n\
            <dt>&nbsp; </dt>\n\
            <dd><strong>Dinners</strong></dd>\n\
            <dd>Regular Friday and Saturday night meetings every week for dinner and fellowship at 6:45pm (please <a href="contact_us.htm">contact us</a> for locations). <br /> <br />\n\
                The first Friday of every month will be our mass meeting at the Trotter House on Central Campus. \n\
              <br />\n\
            </dd>\n\
            <dd><strong>Bible Studies</strong></dd>\n\
            <dd>In Fall 2014 we will be going through an overview of Ephesians and Colossians<br />\n\
              <br />\n\
              -<strong>North Campus</strong> Time and Location is TBD. Check back soon for more details or <a href="contact_us.htm">contact us</a> for more information<br /><br />\n\
              -<strong> Central Campus </strong>Time and Location is TBD. Check back soon for more details or <a href="contact_us.htm">contact us</a> for more information<br /><br />\n\
              - <strong>Individual Appointments</strong> with a few students to get into the Word are always welcome! Please <a href="contact_us.htm">contact us</a> with your availability. </dd>\n\
          </dl>\n\
          <h3>Links</h3>\n\
          <ul>\n\
            <li><a href="http://online.recoveryversion.org/">Online New Testament Bible</a></li>\n\
            <li><a href="http://www.hymnal.net/home.php">Hymns and Psalms</a></li>\n\
            <li><a href="http://www.churchinannarbor.org/">Local Church in Ann Arbor</a></li>\n\
          </ul>'

    $('#news').html(html);
}


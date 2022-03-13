import React from 'react';
const Contact = () =>{
  return (
    <div class="contact">
    <h2>Contact Me</h2>
    <p>
      I would love to take care of all of your nail care needs<br />
      Call or text me and we can get you scheduled right away.
    </p>
    <address>
    <table>
       <thead>You can reach me at the following:</thead>
        <tr>
          <td><i class="fa fa-envelope-o icon" aria-hidden="true"><a href="mailto:maribel.arci@maribelcosmo.com">maribel.arci@maribelcosmo.com</a></i></td>
          <td><i class="fa fa-phone icon" aria-hidden="true"><a href="tel:608.xxx.xxxx">(608) xxx.xxxx</a></i></td>
        </tr>
    </table>
    </address>
    <p><b>Please read my policies prior to booking an appointment with me</b><br /></p>
  </div>
  );
}
export default Contact;
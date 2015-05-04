// comments look like this :)

function sendEmails() {
  var recipient = "trinetolarkers@olark.com";
  var subject = "[friday-payroll-reminders] Weekly reminder for sick leave hours, payroll & expenses";  // Subject line of the email.
  var leaveRequestLink = "https://docs.google.com/a/olark.com/document/d/1ORYduPocNam33ohDyxXVu55fSbzEeSIbwYD_6Uh5bis/edit#heading=h.20j7qi3uuvzg";
  var body = "";  // I'm not sure if this variable is needed? But I left it empty since the function below uses a certain format.
            
  MailApp.sendEmail(recipient, subject, body, {
    
        htmlBody: 
        "<html><body>"
        
        + "<p>Hi there Olark employees! This is an automated weekly email to remind you of the following items:</p>"

        + "<p><strong>Part time Employees</strong><br>"
        + "* Submit timesheets to Lindsay by 8am PT this coming Monday.</p>"

        + "<p><strong>All Employees</strong><br>"
        + "* Submit sick leave hours for the previous week by 8am PT this coming Monday. You can view your accrued hours inside of hrpassport.com.<br>"
        + "* Submit upcoming <a href="+ leaveRequestLink +">leave requests</a> as soon as possible. Leave requests are typically reviewed by Lindsay on Mondays.<br>"
        + "* Submit Expense Reports by 8am PT this Monday for inclusion with the next payroll cycle.</p>"
        
        + "<p>If you have questions on any of the above, let Lindsay (primary) or Kimberly (backup) know.</p>"

        + "<p>If you would like to help make these reminder emails more festive with some sort of automated image script, reach out to Lindsay.</p>"

        + "<p>Enjoy your weekend!</p>"

        + "<p>-- Your hardworking Olark Ops Team <3</p>"
        
        + "</body></html>",
        
        });

  }
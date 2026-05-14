/**
 * GOOGLE APPS SCRIPT FOR CONTACT FORM
 * 
 * 1. Open Google Sheets (using sanjaysanju752004@gmail.com).
 * 2. Create a new sheet and name it "Contact Submissions".
 * 3. In the first row, add these headers: Timestamp, Name, Email, Phone, Message.
 * 4. Go to Extensions > App Script.
 * 5. Paste the code below.
 * 6. Click "Deploy" > "New Deployment".
 * 7. Select Type: "Web App".
 * 8. Set Execute as: "Me" (sanjaysanju752004@gmail.com).
 * 9. Set Who has access: "Anyone".
 * 10. Copy the Web App URL and paste it into 'scriptURL' in Contact.jsx.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.message
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "error": error}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

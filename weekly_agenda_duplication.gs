/**
 * @OnlyCurrentDoc
 */

var FOLDER_ID = "0By_PVuWI8dydVzVuSVhtZ3FoV2M";
var FILE_ID = "1UUX98pWoC2C-95paj0EDKawZp53iMZf5Tjj2D_Z43Cg";

var DAYS_IN_ADVANCE = 7;

function duplicateDoc() {
  var templateFile = DriveApp.getFileById(FILE_ID);

  // Format (Template) Team Sync - yyyy.mm.dd
  var newName = templateFile.getName();
  
  var adjustedDate = new Date(new Date().getTime()+(DAYS_IN_ADVANCE*24*60*60*1000));
  
  newName = newName.replace('(Template)', '');
  newName = newName.replace('yyyy.mm.dd', Utilities.formatDate(adjustedDate, "PST", "yyyy.MM.dd"));
  
  var destination = DriveApp.getFolderById(FOLDER_ID);
  var newFile = templateFile.makeCopy(newName, destination);
  
  var newDoc = DocumentApp.openById(newFile.getId());
  var body = newDoc.getBody();
  
  body.replaceText('\\[Day\\]', Utilities.formatDate(adjustedDate, "PST", "d"));
  body.replaceText('\\[Month\\]', Utilities.formatDate(adjustedDate, "PST", "MMMM"));
  
  var docUrl = newDoc.getUrl();
}
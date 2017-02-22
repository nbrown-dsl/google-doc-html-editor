function onOpen() {
  
  var ui = DocumentApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('html editor')
      .addItem('Run', 'openNewWindow')
      
      .addToUi();
}


function openNewWindow() {
  
  var docText = htmlContent();

  var htmlString = docText +
    '<div>' + 
      '<input type="button" value="Close" onclick="google.script.host.close()" />' + 
    '</div>' 
    

  var htmlOutput = HtmlService
    .createHtmlOutput(htmlString)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setHeight(800)
    .setWidth(800);

  DocumentApp
    .getUi()
    .showModalDialog(htmlOutput, 'html');  
}

//gets doc contents at text string
function htmlContent() {
  
  var docText = DocumentApp.getActiveDocument().getBody().editAsText().getText().toString();
  
  //removes quotes (google sanitises and adds quotes later) 
  var htmlText = docText.replace(/\u{201C}/g,"");
  
  Logger.log(htmlText);
  
 return htmlText;
  
}

//crerates app with doc content as html

function doGet() {
  
  var docText = htmlContent();
  return HtmlService.createHtmlOutput(docText);
}

  


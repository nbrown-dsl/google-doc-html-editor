function formatHtml() {
  
  var doc = DocumentApp.getActiveDocument();
  
  var rangeBuilder = doc.newRange();
  
  // Use editAsText to obtain a single text element containing
 // all the characters in the document.
 var text = doc.getBody().getParagraphs();
  
  for (var i = 0; i < text.length; i++) {
    
    if ( text[i].findText('[<>]+')) {
    
      var tag  = text[i].findText('[<>]+').getElement().asText();
    rangeBuilder.addElement(tag);
    }
    
    Logger.log(tag.getText());
   
 }
  
 doc.setSelection(rangeBuilder.build());
  
 // var tags = text.findText('[<>]+');
  
  
  
 // var tagsText = tags.getElement().asText();
  
//  Logger.log(tagsText.getText());
  
  // Make the first half of the document blue.
 //tagsText.setForegroundColor(0, tagsText.getText().length-1 , '#00FFFF');
  
}

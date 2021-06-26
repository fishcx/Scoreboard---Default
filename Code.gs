function doGet(e) {
 
  return HtmlService
      .createTemplateFromFile('main.html')
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

}
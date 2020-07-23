var url = "https://docs.google.com/spreadsheets/d/1DWbUbOFsW1ZnLhbrGT1mhBdNPH38JpAMWqPUGDEYqOs/edit#gid=0";

function doGet(e) {
  if(e.parameters.v == "doctor-add"){
    return loadDoctor();
  }else if(e.parameters.v == "patient-add"){
    return  HtmlService.createTemplateFromFile("patient-add").evaluate();
  }else if(e.parameters.v == "doctor-table"){
    return  HtmlService.createTemplateFromFile("doctor-table").evaluate();
  }else if(e.parameters.v == "patient-table"){
    return  HtmlService.createTemplateFromFile("patient-table").evaluate();
  }else{
    return  HtmlService.createTemplateFromFile("home").evaluate();
  }
  
}

function loadDoctor(){
  return HtmlService.createTemplateFromFile("doctor").evaluate();
}

function submitdoc(info){
  
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("doctor");
  ws.appendRow([info.name,info.spl,info.gender,info.contact,info.from,info.upto,new Date()]);
  
}
function submitpat(info){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("patient");
  ws.appendRow([info.name,info.age,info.gender,info.contact,info.disease,info.email,new Date()]);
}

function getDoctorTableData(){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("doctor");
  var data = ws.getRange(2, 1, ws.getLastRow()-1,6).getValues();
 // Logger.log(data);
  return data;
  
}
function getPatientTableData(){
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("patient");
  var data = ws.getRange(2, 1, ws.getLastRow()-1,6).getValues();
 // Logger.log(data);
  return data;
  
}
function include(filename){
 return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
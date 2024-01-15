const { updateUploadExtJSON } = require("./updateIdasDB.js");
const excelToJson = require('convert-excel-to-json');

async function omzettenExcelToJSON (externalPartner, pathFile)
 {
    
	if (externalPartner === 'LYNCO')
	{	
    //console.log('externalPartner ' + externalPartner);
    //console.log('pathFile '  + pathFile);
    const resultJSON = excelToJson({
    sourceFile: pathFile,
	 
	 
    header:{
        // rows was 1 en nu dus 1/3
        rows: 1
    },
    columnToKey: {
        'A': 'partNumbers',
        'B': 'partName_not_for_customers',
        'C': 'partName_aftermarket',
        //'D': 'purchasePrice',
        //'E': 'retailPrice'
        'D': 'FunctionGroup', 
        'E': 'FunctionGroupName',
        'F': 'Name_NL',
        'G': 'retailPrice', 
        'H': 'purchasePrice'
        


        

    }
	 
    //sourceFile: '/volvo/20230705_Heico.csv'
});
       updateUploadExtJSON(externalPartner, resultJSON);

    
	}
   
    


}



module.exports = {
  omzettenExcelToJSON: omzettenExcelToJSON
  };
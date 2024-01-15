
const { omzettenExcelToJSON } = require("./handleExcelToJson.js");
 


	 
	 

async function startConsumeWebserviceExcelToJSON (externalPartner , pathFile ) {
   try{
   
    
     
    
   let resolve = await consumeExcelToJSON(externalPartner, pathFile);;
    
    } catch (e) {
        console.error(e);
		 
    } finally {
        console.log('ExcelToJSON ready');
		return ({ message: 'ExcelToJSON succesvol uitgevoerd'});
    }
}



async function consumeExcelToJSON(externalPartner, pathFile) {
	try{
	//console.log('createAndSendRequest ' + JSON.stringify(jsonApilog));
	
    const respOmzettenExcelToJSON = await omzettenExcelToJSON(externalPartner, pathFile);
	let resultOmzettenExcelToJSON = await respOmzettenExcelToJSON;
	//console.log('resultCreateAndSendRequest: ' + resultCreateAndSendRequest);
	//logger.info('createAndSendRequestWebservice ' );
    return 'geslaagd';
	} catch (e) {
        console.error(e);
		 
    }
}

	
//startConsumeWebserviceApiWeb (setletter, guid, applicatie);
 
async function handleConsumeWebserviceExcelToJSON (externalPartner , pathFile)
{
    try{	
	//console.log('setletter:' + setletter);
	//logger.info('handleConsumeWebserviceApiWeb');
	
	var resolve = await startConsumeWebserviceExcelToJSON (externalPartner, pathFile);
	return (resolve);
    }
	catch(err) { console.error('foutmelding startConsumeWebserviceExcelToJSON ' + err);}
	
}


module.exports = {
    handleConsumeWebserviceExcelToJSON: handleConsumeWebserviceExcelToJSON
  }; 
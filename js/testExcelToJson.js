const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: '/volvo/lynco.xlsx',
    header:{
        
        rows: 1 
    },
    columnToKey: {
        'A': '{{A1}}',
        'B': '{{B1}}',
        'C': '{{C1}}',
        'D': '{{D1}}',
        'E': '{{E1}}'
        

    }
    //sourceFile: '/volvo/20230705_Heico.csv'
});
   console.log(result);
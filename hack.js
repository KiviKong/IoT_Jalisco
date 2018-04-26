let clases = () => {
    for(let x = 0; x<20; x++) {
        for(let y = 0; y<20; y++) {
            console.log('#block_'+ (x+1) + '_' + (y+1) + ' { \n' +
                '   grid-row: row ' + (x+1) + ';\n'+    
                '   grid-column: col ' + (y+1) + ';\n'+
                '   background-color: aqua; \n' +
                '}'
            );
        }
    }

}


clases();
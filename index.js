function superbowlWin(records) {
    let foundRecord = records.find(function(element) {
        return element.result === `W` 
    } ) 
    if (foundRecord ) {
        return foundRecord.year 
    }

}

// for a given string tell me weather  it has even number of characters or not
function evenSizedString (str){
    const size = str.length;
    console.log(str,`String size of (${str})=`, size);
    if (size % 2 ===0){
        console.log('Even Size');
        return true;
    }
    else{
        console.log('Odd Size');
        return false;
    }
}
evenSizedString('Dhaka');
evenSizedString('satkhira');

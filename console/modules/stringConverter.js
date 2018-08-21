let stringConvert = {
    toDash: (string) => {
        let transformed = '';
        string.replace('-', '').split('').forEach((character, key) => {
            if (character === character.toUpperCase()) {
                if(key !== 0){
                    transformed += '-' + character.toLowerCase();
                }
            }else{
                transformed += character.toLowerCase();
            }
        });
        return transformed;
    }
};

module.exports = stringConvert;
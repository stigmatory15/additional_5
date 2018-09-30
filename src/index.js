module.exports = function check(str, bracketsConfig) {
    let array = [];
    array.push(str[0]);
    for (let i = 1; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            for (let k = i - 1; k >= 0; k--) {
                if (str[i] == bracketsConfig[j][0]) {
                    if(bracketsConfig[j][0] == bracketsConfig[j][1] && str[i] == array[k]){
                        array.pop();
                    }
                    array.push(str[i])
                }

                if (str[i] == bracketsConfig[j][1] && array[k] == bracketsConfig[j][0]){
                    array.pop();
                }

            }
        }
    }
    if(array.length == 0) return true;
    else return false;
}
